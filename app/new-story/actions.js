"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function PublishPost(formData) {

  const title = formData.get('title');
  const context = formData.get('context');
  const supabase = createClient();

  const {data: {user}} = await supabase.auth.getUser();


  const {data, error} = await supabase.from('posts').insert({title,content,user_id: user.id}).select().single();

  if(!user){
    redirect('login')
  }

  
  
}