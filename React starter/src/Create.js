import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('jack');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Write a new blog.</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title :</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog content :</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Author name :</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="jack">jack</option>
                    <option value="jackass">jackass</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;