"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function PostComment(formData) {

  const content = formData.get('comment');
  const postId = formData.get('postId')
  const supabase = createClient();
  const {data: {user}} = await supabase.auth.getUser();
  

  const {data,error} = await supabase.from('comments').insert({post_id: postId,content,user_id: user.id}).select().single();

  

  redirect(`/posts/${data.post_id}`)

  
}