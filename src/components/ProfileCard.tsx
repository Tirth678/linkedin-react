interface Props {
    img1: string
    img2: string
    name: string
    desc: string
    state: string
    currentPosi: string
}
function ProfileCard (props: Props) {
    return (
        <>
        <div className="border-2 p-5 rounded-2xl">
            <img src={props.img1} height={192} width={192}/>
            <img className="rounded-4xl " src={props.img2} height={65} width={65}/>
            <h1 className="font-bold text-2xl">{props.name}</h1>
            <p>{props.desc}</p>
            <p className="text-sm">{props.state}</p>
            <div className="flex flex-row">
            <img src={"https://i.pinimg.com/736x/e7/4f/e4/e74fe40cdb9d421cacbd373738774b3e.jpg"} height={20} width={20}/>
            <h2 className="px-2 font-bold">{props.currentPosi}</h2>
            </div>
        </div>
        </>
    )
}
export default ProfileCard;