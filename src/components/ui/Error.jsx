export default function Error({code, name, message}) {
    return (
        <div>
            {code}
            <br />
            {name}
                <br />
            {message}
        </div>
    )
}