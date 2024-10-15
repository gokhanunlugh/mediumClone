import { createClient } from "@/utils/supabase/server";


export default async function user() {
  const supabase = createClient;
  const {data: {user}} = await supabase.auth.getUser()
  console.log(data.email);
  

  return data.email
  
}