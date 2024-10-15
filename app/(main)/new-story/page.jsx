import PublishPost from "./actions";

export default function NewStory() {

  return (
    <div className="draft">
      <form id="draft" action={PublishPost}>
        <input type="text" name="title" placeholder="Title" /> <br />
        <textarea name="content" placeholder="Tell your story..."></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  )
}