"use client";

import { useState } from "react";

type PostProps = {
  user: string;
  text: string;
};

export default function PostCard({ user, text }: PostProps) {

  const [likes, setLikes] = useState(0);

  return (

    <div className="bg-white rounded-xl shadow-md p-5">

      <div className="font-bold mb-2">
        @{user}
      </div>

      <p className="mb-4">
        {text}
      </p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="text-red-500"
      >
        ❤️ {likes}
      </button>

    </div>

  );
}