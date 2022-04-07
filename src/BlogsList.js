const BlogsList = ({blogs, title, deleteHanlder}) => {
    return (
        <div className="blogs-list">
            <h1>{title}</h1>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                    <button onClick={() => deleteHanlder(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
export default BlogsList;