import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default function Home() {
  const supabase = createClient();
  
  return (
    <>

    <div className="container">

    </div>
    </>
  );
}
