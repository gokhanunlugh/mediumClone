import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import PostComment from "./action";



export default async function PostDetailsPage({params}){
  const supabase = createClient();
  const {data, error} = await supabase.from('posts').select().eq('id', params.id).single();
  const {dataC, errorC } = await supabase.from('comments').select('*');

  console.log(dataC);
  

  if(!data) return notFound();
 
  
  

  return (
    <>
        <div className="post">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>

      <div className="insertComment">
        <form action={PostComment}>
          <input type="text" name="comment"/>
          <input type="hidden" name="postId" value={data.id} />
          <button>Comment</button>
        </form>
      </div>

      <div className="comments">
          {!dataC ? null : (
            dataC.map(x=> (
              <div className="comment" key={x.id}>
                <p>{x.content}</p>
              </div>
            ))
          )}
      </div>
    </>
  )

}