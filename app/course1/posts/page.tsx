import C1PostsList from "@/components/c1-components/c1-posts-list";
import { Suspense } from "react";

export default function Posts() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center px-3 lg-px-16">
      <h1 className="text-3xl my-4 font-bold">Posts</h1>
      <Suspense fallback="Loading....">
        <C1PostsList />
      </Suspense>
    </div>
  );
}
