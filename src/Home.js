import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorCode, setErrorCode] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogss")
                .then((res) => {
                    if (!res.ok) {
                        console.log(res)
                        setErrorCode(res.status);
                        throw Error("Could not fetch the data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setErrorMessage(null);
                    setErrorCode(null);
                })
                .catch((err) => {
                    setIsPending(false);
                    setErrorMessage(err.message);
                });
        }, 1000)
    }, []);

    return ( 
        <div className="home">
            { errorMessage && <div> { errorCode } : { errorMessage }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogsList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;