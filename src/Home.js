import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error: errorMessage} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            { errorMessage && <div> { errorMessage }</div>}
            { isPending && <div>Loading...</div>}
            { blogs && <BlogsList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;