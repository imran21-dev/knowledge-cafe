import PropTypes from "prop-types";
import { HiOutlineBookmark } from "react-icons/hi";


const Blog = ({blog,handleBookmark,handleTimeCount}) => {
    const {cover_img,author_img,author_name,post_date,reading_time,title,hashtags} = blog;
   
    return (
        <div className="border-b mt-7">
             <img className="w-full rounded-lg" src={cover_img} alt="Blog Image" />
             <div className="flex justify-between items-center pt-6 pb-3">
                 <section className="flex justify-start gap-3">
                     <img className="w-14 h-14 rounded-full object-cover" src={author_img} alt="author image" />
                       <div>
                       <h1 className="font-bold text-lg">{author_name}</h1>
                       <h5 className="text-sm text-black/45 font-semibold">{post_date}</h5>
                       </div>
                 </section>
                 <section className="flex justify-start gap-2">
                      <h3 className="text-lg text-black/45 font-semibold">{reading_time} Min read</h3>
                      <button onClick={()=>handleBookmark(blog)} className="text-xl text-black/45 font-semibold"><HiOutlineBookmark></HiOutlineBookmark></button>
                 </section>
             </div>
             <h1 className="text-2xl font-bold pb-2">{title}</h1>
             <div>
                {
                hashtags.map((hash, idx)=> <a className="px-1 text-sm text-black/45 font-semibold" key={idx}>{hash}</a>)
                }
             </div>
             <button onClick={()=> handleTimeCount(blog)} className="text-sm bg-violet-600 hover:bg-black text-white font-semibold px-5 py-2 rounded-xl mt-3 mb-7">Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleTimeCount: PropTypes.func.isRequired
}
export default Blog;