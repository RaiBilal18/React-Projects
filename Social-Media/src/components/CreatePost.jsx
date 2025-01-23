import styles from "./CreatePost.module.css";
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostlistContext);
  return (
    <Form method="POST" className="CreatePost">
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="UserId"
          placeholder="Enter Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tittle" className="form-label">
          Post Tittle
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="tittle"
          placeholder="How Are You Doing Today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Tell Me More About Yourself
        </label>
        <textarea
          name="body"
          rows={3}
          type="text"
          className="form-control"
          id="body"
          placeholder="Enter Your Thoughts Here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number Of Reactions
        </label>
        <input
          name="reactions"
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Hashtags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="Hashtags"
          placeholder="Please enter hashtags with spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        post
      </button>
    </Form>
  );
};
export const actionFormSubmit = async (data) => {
  console.log("Form Submitted");
  const formdata = await data.request.formData();
  const addedposts = Object.fromEntries(formdata);
  addedposts.tags = addedposts.tags.split(" ");
  console.log(addedposts);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addedposts),
  })
    .then((res) => res.json())
    .then((resobj) => {
      console.log(resobj);
    });
  return redirect("/");
};

export default CreatePost;
