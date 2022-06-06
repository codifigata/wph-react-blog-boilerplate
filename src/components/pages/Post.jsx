import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import ThemeContext from "../../context/ThemeContext";
import axios from "axios";
import { SITE_URL } from "../../config";
import Error from "../ui/Error";

export default function Post() {
  const { id } = useParams();

  // We'll use this piece of state to store post's data retrieved from the REST API.
  const [post, setPost] = useState([]);

  // We'll use this piece of state to store any error related to fetchPosts() function.
  const [error, setError] = useState({});

  // We'll use this piece of state to store a Boolean and make it clear if the UI is loading data.
  const [loadingState, setLoadingState] = useState(true);

  // Extract the "theme" variable from Context.
  const { theme } = useContext(ThemeContext);

  /**
   * Using Axios, we perform a GET request to get (🤭) post's data.
   * @returns {Promise<void>}
   */
  const fetchPost = async () => {
    try {
      // Returns a promise with an Object as value.
      const loadPost = await axios.get(`${SITE_URL}/wp-json/wp/v2/posts/${id}`);
      //console.log(loadPost); // Check the Object structure before moving on.

      // If the response is successful, we can continue.
      if (loadPost.status === 200) {
        // Extract the "data" property from the loadPosts Object into a variable.
        const post = await loadPost.data;
        console.log(post); // Check array structure from the console before moving on.

        // Store posts data into our "posts" variable.
        setPost(post);

        // Empty the error state, just in case.
        setError({});

        // Since posts are now in stored in the state, we can set the loading state to false.
        setLoadingState(false);
      }
    } catch (err) {
      //console.log(err); // Check error Object structure from the console.

      // Store the "err" Object inside the error piece of state.
      setError(err);
    }
  };

  useEffect(() => {
    // Call fetchPost() as soon as the component mounts.
    fetchPost();
  }, []); // Leaving an empty array as dependency ensures that the useEffect runs once.

  // Check if the error object is not empty.
  if (Object.keys(error).length > 0) {
    return (
      <Error code={error.code} name={error.name} message={error.message} />
    );
  }

  // Display a loading message while the "posts" variable is empty.
  if (loadingState) {
    return <>Loading...</>;
  }

  return (
    <div className="post">
      <h1 className="mb-10 text-3xl font-bold">{parse(post.title.rendered)}</h1>
      <>{parse(post.content.rendered)}</>
    </div>
  );
}
