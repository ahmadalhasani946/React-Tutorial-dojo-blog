const BlogsList = ({blogs, title}) => {
    return (
        <div className="blogs-list">
            <h1>{title}</h1>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
/*
const BlogsList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="blogs-list">
            <h1>{title}</h1>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
*/
export default BlogsList;