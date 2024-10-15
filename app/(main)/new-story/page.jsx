import PublishPost from "./actions";

export default function NewStory(){

  return (
    <div className="draft">
      <form id="draft" action={PublishPost}>
      <input type="text" name="title" placeholder="Title"/> <br />
      <input type="text" name="content" placeholder="Tell your story..." />
      </form>
    </div>
  )
}