import { useState } from "react";
import Blog from "./Blog/Blog";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleTimeCount}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const BlogsApi = async() => {
        const res = await fetch('data.json');
        const data = await res.json();
        setBlogs(data)
    }
    BlogsApi()
  }, []);
  return (
    <div className="md:w-2/3 relative">
      {
      blogs.map((blog)=>  <Blog key={blog.id} 
                                blog={blog}
                                handleBookmark={handleBookmark}
                                handleTimeCount={handleTimeCount}
      ></Blog>)
      }
    </div>
  );
};

Blogs.propTypes ={
    handleBookmark: PropTypes.func.isRequired,
    handleTimeCount: PropTypes.func.isRequired
}
export default Blogs;
