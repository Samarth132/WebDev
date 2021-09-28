import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="homepage">
            <h1>Homepage</h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs}/>}
        </div>
    );
}

export default Home;