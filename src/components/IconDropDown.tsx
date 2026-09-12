interface Props {
    imgUrl: string
    href: string
    title: string
    height: number
    width: number
}
function IconDropDown(props: Props){
    return (
        <>
        <div className="pr-10 items-center">
        <a href={props.href}><img className="rounded-full" src={props.imgUrl} height={props.height} width={props.width}/></a>
        <a href={props.href}>{props.title}</a>
        </div>
        </>
    )
}
export default IconDropDown;