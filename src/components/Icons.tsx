interface Props {
    imgUrl: any
    title: string
    href: string
}
function Icons (props: Props) {
    return (
    <>
    <div className="flex flex-row pr-10">
        <img src={props.imgUrl}/>
        <a href={props.href}>{props.title}</a>
    </div>
    </>
    )
}
export default Icons;