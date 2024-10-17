"use client"

import handleClick from "./action"


export default async function Likes({params}){

  return (
    <div className="likes">
      <button onClick={()=> handleClick({params})}>Clap</button>
    </div>
  )
}