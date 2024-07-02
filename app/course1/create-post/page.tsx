import { createPost } from "@/actions/c1-actions/c1-action";

export default async function CreatePost() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-4xl my-3">Create Post</h1>
        <form action={createPost} className="space-x-2 mt-10 h-10">
          <input type="text" required name="title" placeholder="title" className="h-full border rounded px-3" />
          <button type="submit" className="h-full bg-blue-500 text-white px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
