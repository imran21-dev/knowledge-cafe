import PropTypes from "prop-types";

const Bookmark = ({bookmarks}) => {
 
    return (
        <>
        
        {
        bookmarks.map((bookmark, idx) =>  <div key={idx} className="bg-white rounded-md p-4 font-semibold my-3">
            <h1>{bookmark.title}</h1>
           
        </div>)
        }
        </>
       
    );
};
Bookmark.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default Bookmark;