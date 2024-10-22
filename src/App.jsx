
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Componaents/Blogs'
import Bookmarks from './assets/Componaents/Bookmarks/Bookmarks'
import Header from './assets/Componaents/Header/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [timeCount, setTimeCount] = useState(0);

 const handleBookmark = (blog) => {
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks)
 }
const handleTimeCount = (blog) => {
 
  const {reading_time} = blog
  const newTimeCount = timeCount + reading_time;
  setTimeCount(newTimeCount)

  const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== blog.id);
  setBookmarks(remainingBookmarks)
}
  return (
    <div className='md:container mx-auto px-2 md:px-0'>


    <Header></Header>
      <main className='flex md:flex-row flex-col-reverse relative'>
      <Blogs handleBookmark={handleBookmark} handleTimeCount={handleTimeCount}></Blogs>
      <Bookmarks bookmarks={bookmarks} timeCount={timeCount}></Bookmarks>
      </main>


    </div>
  )
}

export default App
