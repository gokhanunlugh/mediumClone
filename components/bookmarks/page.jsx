"use client"

import addBookmark from "./action";


export default function Bookmarks(params){

  return (
    <button onClick={()=> addBookmark(params)}>Bookmark</button>
  )
}