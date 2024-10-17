"use client"

import handleClick from "./action"


export default  function CommentLikes(params){
  
  
  return (
    <div className="likes">
      <button onClick={()=> handleClick(params)}>Clap</button>
    </div>
  )
}