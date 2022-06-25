import { useState, useEffect } from "react";
import BlogsList from "./BlogsList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const deleteHanlder = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log("use Effect ran");
        console.log(blogs);
    });

    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs!" deleteHanlder={deleteHanlder} />
        </div>
     );
}
 
export default Home;