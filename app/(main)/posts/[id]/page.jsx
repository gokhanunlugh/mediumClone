import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import Comments from "@/components/comments/page";
import Likes from "@/components/likes/page";
import LikesCounter from "@/components/likes-counter/page";
import Bookmarks from "@/components/bookmarks/page";



export default async function PostDetailsPage({ params }) {
  const supabase = createClient();
  const { data, error } = await supabase.from('posts').select().eq('id', params.id).single();



  if (!data) return notFound();




  return (
    <>
      <div className="post">
        <h1>{data.title} <Likes params={params}/> <LikesCounter params={params} /> <Bookmarks params={params} /></h1>
        <p>{data.content}</p>
      </div>

      <Comments params={params} />



    </>
  )

}