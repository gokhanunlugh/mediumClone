import { createClient } from "@/utils/supabase/server"


export default async function CommentLikesCounter(params){
  
  const supabase = createClient();

  let { data: comment_likes, error } = await supabase
  .from('comment_likes')
  .select().eq('comment_id', params.commentId)
  
  if(comment_likes === null) {
    return (
      <span></span>
    )
  }
  
  return (
    <span>{comment_likes.length}</span>
  )

}