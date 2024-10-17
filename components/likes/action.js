"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";


export default async function handleClick({params}) {
  const postId = params.id
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser();
  const { data, error } = await supabase.from('post_likes').select().eq('post_id', postId).eq('user_id', user.id);
  if(data.length>=1){
    const { error: del } = await supabase.from('post_likes').delete().eq('post_id', postId).eq('user_id', user.id);
    return redirect(`/posts/${postId}`)
    
  }
  
  
  const {data:likes} = await supabase.from('post_likes').insert({post_id: postId,user_id: user.id}).select().single();
  
  redirect(`/posts/${postId}`)
  


  


  
}