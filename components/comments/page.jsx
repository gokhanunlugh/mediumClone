import { createClient } from "@/utils/supabase/server";
import PostComment from "./action";


export default async function Comments({params}) {
  const supabase = createClient();
  const { data, error } = await supabase.from('comments').select('*').eq('post_id', params.id);
  console.log(data);
  

  return (
    <>
      <div className="insertComment">
        <form action={PostComment}>
          <input type="text" name="comment" />
          <input type="hidden" name="postId" value={params.id} />
          <button>Comment</button>
        </form>
      </div>

      <div className="comments">
        {!data ? null : (
          data.map(x => (
            <div className="comment" key={x.id}>
              <p>{x.content}</p>
            </div>
          ))
        )}
      </div>

    </>
  )

}