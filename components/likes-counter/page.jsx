import { createClient } from "@/utils/supabase/server"


export default async function LikesCounter({params}){
  const supabase = createClient();

  let { data: post_likes, error } = await supabase
  .from('post_likes')
  .select().eq('post_id', params.id)
  if(post_likes === null) {
    return <span></span>
  }
  
  return (
    <span>{post_likes.length}</span>
  )

}