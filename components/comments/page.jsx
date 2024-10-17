import { createClient } from "@/utils/supabase/server";
import PostComment from "./action";
import CommentLikesCounter from "../comment-like-counter/page";
import CommentLikes from "../comment-like/page";


export default async function Comments({params}) {
  const supabase = createClient();
  const { data, error } = await supabase.from('comments').select('*').eq('post_id', params.id);

  

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
              <CommentLikes params={params} commentId={x.id} />
              <CommentLikesCounter  commentId={x.id} />
            </div>
          ))
        )}
      </div>

    </>
  )

}