import { useState } from "react";
import api from "../lib/api";
import profile from "../lib/profile";

function NewPost({ onPostCreated }: { onPostCreated?: () => void }) {
    const [content, setContent] = useState("");
    const [posting, setPosting] = useState(false);

    const createPost = async () => {
        const text = content.trim();
        if (!text || posting) return;

        try {
            setPosting(true);
            await api.post("/post", { content: text });
            setContent("");
            onPostCreated?.();
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to create post. Is the backend running?");
        } finally {
            setPosting(false);
        }
    };

    return (
        <div className="flex w-full flex-col rounded-2xl border-2 px-4 py-4">

            {/* Profile + Input */}
            <div className="flex items-center gap-3">
                <img
                    src={profile.avatar}
                    className="h-10 w-10 shrink-0 rounded-full"
                    alt="profile"
                />

                <input
                    className="min-w-0 flex-1 rounded-full border-2 px-4 py-2 outline-none"
                    type="text"
                    placeholder="Start a post"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") createPost();
                    }}
                />

                {content.trim() && (
                    <button
                        onClick={createPost}
                        disabled={posting}
                        className="shrink-0 cursor-pointer rounded-full bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {posting ? "Posting..." : "Post"}
                    </button>
                )}
            </div>

            {/* Options */}
            <div className="mt-4 flex items-center justify-around">

                <div className="flex cursor-pointer items-center gap-2">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXZpZGVvIj48cGF0aCBkPSJtMTYgMTMgNS4yMjMgMy40ODJhLjUuNSAwIDAgMCAuNzc3LS40MTZWNy44N2EuNS41IDAgMCAwLS43NTItLjQzMkwxNiAxMC41Ii8+PHJlY3QgeD0iMiIgeT0iNiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjEyIiByeD0iMiIvPjwvc3ZnPg=="
                        className="h-5 w-5"
                        alt=""
                    />
                    <p>Video</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4="
                        className="h-5 w-5"
                        alt=""
                    />
                    <p>Photo</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2">
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4="
                        className="h-5 w-5"
                        alt=""
                    />
                    <p>Write Article</p>
                </div>

            </div>
        </div>
    );
}

export default NewPost;
