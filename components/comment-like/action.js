"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";


export default async function handleClick(params) {
  const commentId = params.commentId;
  const postId = params.params.id;
  
  
  
  
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser();
  const { data, error } = await supabase.from('comment_likes').select().eq('comment_id', commentId).eq('user_id', user.id);
  if(data === null) {
    const {data:likes} = await supabase.from('comment_likes').insert({comment_id: commentId,user_id: user.id}).select().single();

    return 
  }
  if(data.length>=1){
    const { error: del } = await supabase.from('comment_likes').delete().eq('comment_id', commentId).eq('user_id', user.id);
    return redirect(`/posts/${postId}`)
    
  }
  
  
  const {data:likes} = await supabase.from('comment_likes').insert({comment_id: commentId,user_id: user.id}).select().single();
  
  redirect(`/posts/${postId}`)
  


  


  
}