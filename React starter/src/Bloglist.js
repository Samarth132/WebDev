import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {
    return (
        <div className="blogs">
            {blogs.map((blog)=>(
                <div className="blog-list" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <h6>{blog.author}</h6>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default Bloglist;