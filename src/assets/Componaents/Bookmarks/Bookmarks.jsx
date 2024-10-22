import Bookmark from "./Bookmark/Bookmark";
import PropTypes from "prop-types";
import SpendTime from "./SpendTime/SpendTime";

const Bookmarks = ({bookmarks, timeCount}) => {
    return (
        <div className=" md:w-1/3 md:pl-8 mt-7  relative">
            <SpendTime timeCount={timeCount}></SpendTime>
            <div className="w-full bg-black/10 rounded-lg min-h-64 md:min-h-96 h-max md:max-h-[890px] max-h-64 overflow-y-auto p-7">
            <h1 className="font-bold text-lg">Bookmarked Blogs : {bookmarks.length} </h1>
            <Bookmark bookmarks={bookmarks}></Bookmark>
            </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    timeCount: PropTypes.number.isRequired
}
export default Bookmarks;