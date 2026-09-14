import PostControl from "./PostControl"
import ProfileDesc from "./ProfileDesc"

interface PostProps {
    name: string
    profilePic: string
    description: string
    photo?: string // optional string ho na ho
    updatredAt: string
    premium: boolean
    likeCount: number
}

const post: PostProps = {
    name: "Harkirat",
    profilePic: "",
    description: "",
    photo: "idk",
    updatredAt: "",
    premium: true,
    likeCount: 21
}
function Post () {
    return (
        <>
        <div className="rounded-2xl bg-white">
            <ProfileDesc/>
        </div>
        </>
    )
}
export default Post;