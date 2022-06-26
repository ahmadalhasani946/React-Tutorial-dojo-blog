import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input
                    type="text"
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
            <div>{ title }</div>
            <div>{ body }</div>
            <div>{ author }</div>
        </div>
     );
}
 
export default Create;