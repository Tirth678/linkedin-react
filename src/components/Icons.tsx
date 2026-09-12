interface Props {
    imgUrl: any
    title: string
    href: string
    height: number
    width: number
}
function Icons (props: Props) {
    return (
    <>
    <div className="flex flex-col pr-10 items-center">
        <a href={props.href}><img className="ml-2 bg-grey-400" src={props.imgUrl} height={props.height} width={props.width}/></a>
        <a className="text-gray-500 hover:text-black" href={props.href}>{props.title}</a>
    </div>
    </>
    )
}
export default Icons;