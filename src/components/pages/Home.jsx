import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ThemeContext from "../../context/ThemeContext";
import Error from "../ui/Error";
import Card from "../ui/Card";
import { SITE_URL } from "../../config";

export default function Home() {
  // We'll use this piece of state to store posts retrieved from the REST API.
  const [posts, setPosts] = useState([]);

  // We'll use this piece of state to store any error related to fetchPosts() function.
  const [error, setError] = useState({});

  // We'll use this piece of state to store a Boolean and make it clear if the UI is loading data.
  const [loadingState, setLoadingState] = useState(true);

  // Extract the "theme" variable from Context.
  const { theme } = useContext(ThemeContext);

  // Since the WP excerpt have some unnecessary <p></p> tags, we'll get rid of them.
  const cleanUpExcerpt = (excerpt) => {
    const regex = /(<p>)|(<\/p>)/gi;

    return excerpt.replace(regex, "");
  };

  /**
   * Using Axios, we perform a GET request to get (🤭) posts data.
   * @returns {Promise<void>}
   */
  const fetchPosts = async () => {
    try {
      // Returns a promise with an Object as value.
      const loadPosts = await axios.get(`${SITE_URL}/wp-json/wp/v2/posts`);
      // console.log(loadPosts); // Check the Object structure before moving on.

      // If the response is successful, we can continue.
      if (loadPosts.status === 200) {
        // Extract the "data" property from the loadPosts Object into a variable.
        const posts = await loadPosts.data;
        //console.log(posts); // Check array structure from the console before moving on.

        // Store posts data into our "posts" variable.
        setPosts(posts);

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
    fetchPosts();
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

  // Map through "posts" array to display its content.
  return (
    <main className="mt-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <h2 className="mb-2.5 text-xl font-black text-gray-900">
              {parse(post.title.rendered)}
            </h2>
            <div className="text-sm text-gray-800">
              {parse(cleanUpExcerpt(post.excerpt.rendered))}
            </div>
            <Link
              to={`/${post.id}`}
              className={`mt-5 block w-full rounded-lg bg-gray-900 px-5 py-2.5 text-center ${
                theme === "dark" ? "text-gray-200" : "text-white"
              }`}
            >
              Read more
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
