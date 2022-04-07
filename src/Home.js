import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {

    // useState return two values the name of the variable and the function we can edit the variable with
    const [name, setName] = useState("Mario");

    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName("Luigi");
        setAge(30);
    }

    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs!" />
        </div>
     );
}
 
export default Home;