import { useCallback, useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import api from "../lib/api";
import profile from "../lib/profile";

type ApiPost = {
    id: string
    content: string
    createdAt: string
};

function timeAgo(dateStr: string): string {
    const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
    if (seconds < 60) return "now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    return `${Math.floor(hours / 24)}d`;
}

function CenterScreen() {
    const [posts, setPosts] = useState<ApiPost[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = useCallback(async () => {
        try {
            const res = await api.get<ApiPost[]>("/post");
            setPosts(res.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className="flex w-full max-w-[750px] flex-col">
            <NewPost onPostCreated={fetchPosts} />

            {/* API posts */}
            {loading ? (
                <p className="mt-5 text-center text-gray-500">Loading posts...</p>
            ) : (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        name={profile.name}
                        profilePic={profile.avatar}
                        description={profile.currentPosi}
                        updatedAt={timeAgo(post.createdAt)}
                        postDescription={post.content}
                    />
                ))
            )}

            {/* Demo posts */}
            <Post name={"Raman Singh"} profilePic={"https://i.pinimg.com/736x/70/a2/41/70a24115a6a10f0721cfa56dad935369.jpg"} description={"AI/ML Engineer | TEDx"} updatedAt={"2h"} postDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elitMaxime dignissimos iste repellendus! Sint nesciunt molestiaevel molestias doloribus consectetur vero, libero voluptatem.Voluptatem quia ipsum excepturi officia reprehenderit,corrupti velOdio molestias non aliquam corporis sunt voluptate pariatur quos libero itaque porro possimusquam modi aspernatur corrupti at, adipisci assumenda eius dolores velit! Eveniet voluptate eos cumque."} postImage={"https://i.pinimg.com/736x/f9/f5/fd/f9f5fd3e54d56a6a9b0a667bf78f059e.jpg"} />
            <Post
                name={"Arjun Patel"}
                profilePic={"https://randomuser.me/api/portraits/men/32.jpg"}
                description={"Full Stack Developer | Next.js | Node.js"}
                updatedAt={"6h"}
                postDescription={
                    "Spent the weekend rebuilding one of my old projects with Next.js and TypeScript. Looking back at your old code is both painful and satisfying 😂. The best part of programming is realizing that the things which once seemed impossible eventually become normal."
                }
                postImage={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
            />

            <Post
                name={"Aisha Khan"}
                profilePic={"https://randomuser.me/api/portraits/women/65.jpg"}
                description={"AI Researcher | Machine Learning Enthusiast"}
                updatedAt={"8h"}
                postDescription={
                    "AI is moving incredibly fast, but fundamentals still matter. Understanding data structures, mathematics, statistics, and how models actually work will always give you an advantage over simply knowing how to call an API."
                }
                postImage={"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"}
            />

            <Post
                name={"Rohan Mehta"}
                profilePic={"https://randomuser.me/api/portraits/men/75.jpg"}
                description={"Founder | Building products for developers"}
                updatedAt={"12h"}
                postDescription={
                    "Building a startup teaches you something interesting: nobody really knows what they are doing at the beginning. You learn by building, failing, listening to users, and building again. The important thing is to start."
                }
                postImage={"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"}
            />

            <Post
                name={"Neha Verma"}
                profilePic={"https://randomuser.me/api/portraits/women/33.jpg"}
                description={"UI/UX Designer | Product Designer"}
                updatedAt={"1d"}
                postDescription={
                    "A good design is not just about making something look beautiful. It is about making the user understand what to do without having to think too much. Simplicity is often much harder to achieve than complexity."
                }
                postImage={"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80"}
            />
        </div>
    );
}

export default CenterScreen;
