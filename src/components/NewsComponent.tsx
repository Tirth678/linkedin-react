interface Props {
    title: string
    days: number
    readers: string
}
function NewsComponent (props: Props) {
    return (
        <>
        <div className="">
        <p className="font-bold">{props.title}</p>
        <div className="flex flex-row">
            <p className="text-sm text-gray-500">{props.days}d ago</p>
            <p className="mx-1">~</p>
            <p className="mx-1 text-sm text-gray-500">{props.readers}readers</p>
        </div>
        </div>
        </>
    )
}
export default NewsComponent;