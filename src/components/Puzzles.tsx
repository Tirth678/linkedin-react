interface PuzzleProps {
    title: string
    desc: string
    imgUrl: string
}
function Puzzles (props: PuzzleProps) {
    return (
        <>
        <div className="mx-2 my-7">
            <p className="font-bold text-2xl my-3"></p>
            <div className="flex flex-row">
                <img className="mx-3 rounded-2xl border-2" src={props.imgUrl} height={10} width={50}/>
               <div>
               <p className="font-bold">{props.title}</p>
               <p>{props.desc}</p>
               </div>
            </div>
        </div>
        </>
    )
}
export default Puzzles;