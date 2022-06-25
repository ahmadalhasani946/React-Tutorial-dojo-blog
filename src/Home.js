import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const [name, setName] = useState("mario");

    const deleteHanlder = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    };

    // since useEffect run with every rendering we want to restrict its running
    // we add an empty array at the end of the useEffect block so it runs only at the first rendering
    // we call this array as a dependencies array
    /*
    useEffect(() => {
        console.log("use Effect ran");
        console.log(blogs);
    }, []);
    */

    useEffect(() => {
        console.log("use Effect ran");
        console.log(name);
    }, [name]);

    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs!" deleteHanlder={deleteHanlder} />
            <button onClick={() => setName("Luigi")}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;