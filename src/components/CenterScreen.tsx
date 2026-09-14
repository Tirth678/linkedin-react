import NewPost from "./NewPost";
import Feed from "./NewPost";
import Post from "./Post";

function CenterScreen (){
    return (
        <>
        <div>
            <NewPost/>
            <Post name={"Raman Singh"} profilePic={"https://i.pinimg.com/736x/70/a2/41/70a24115a6a10f0721cfa56dad935369.jpg"} description={"AI/ML Engineer | TEDx"} updatredAt={"2h"} postDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elitMaxime dignissimos iste repellendus! Sint nesciunt molestiaevel molestias doloribus consectetur vero, libero voluptatem.Voluptatem quia ipsum excepturi officia reprehenderit,corrupti velOdio molestias non aliquam corporis sunt voluptate pariatur quos libero itaque porro possimusquam modi aspernatur corrupti at, adipisci assumenda eius dolores velit! Eveniet voluptate eos cumque."} postImage={"https://i.pinimg.com/736x/f9/f5/fd/f9f5fd3e54d56a6a9b0a667bf78f059e.jpg"}/>
            <Post
    name={"Arjun Patel"}
    profilePic={"https://randomuser.me/api/portraits/men/32.jpg"}
    description={"Full Stack Developer | Next.js | Node.js"}
    updatredAt={"6h"}
    postDescription={
        "Spent the weekend rebuilding one of my old projects with Next.js and TypeScript. Looking back at your old code is both painful and satisfying 😂. The best part of programming is realizing that the things which once seemed impossible eventually become normal."
    }
    postImage={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
/>

<Post
    name={"Aisha Khan"}
    profilePic={"https://randomuser.me/api/portraits/women/65.jpg"}
    description={"AI Researcher | Machine Learning Enthusiast"}
    updatredAt={"8h"}
    postDescription={
        "AI is moving incredibly fast, but fundamentals still matter. Understanding data structures, mathematics, statistics, and how models actually work will always give you an advantage over simply knowing how to call an API."
    }
    postImage={"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"}
/>

<Post
    name={"Rohan Mehta"}
    profilePic={"https://randomuser.me/api/portraits/men/75.jpg"}
    description={"Founder | Building products for developers"}
    updatredAt={"12h"}
    postDescription={
        "Building a startup teaches you something interesting: nobody really knows what they are doing at the beginning. You learn by building, failing, listening to users, and building again. The important thing is to start."
    }
    postImage={"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"}
/>

<Post
    name={"Neha Verma"}
    profilePic={"https://randomuser.me/api/portraits/women/33.jpg"}
    description={"UI/UX Designer | Product Designer"}
    updatredAt={"1d"}
    postDescription={
        "A good design is not just about making something look beautiful. It is about making the user understand what to do without having to think too much. Simplicity is often much harder to achieve than complexity."
    }
    postImage={"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80"}
/>
        </div>
        </>
    )
}
export default CenterScreen;