import NewsComponent from "./NewsComponent";
import Puzzles from "./Puzzles";

function RightScreen () {
    return (
        <>
        <div className="border-2 p-5 rounded-2xl">
            <div>
                <div className="flex flex-row p-2">
                    <p className="mr-29 font-bold text-2xl">Linkedin News</p>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW5ld3NwYXBlciI+PHBhdGggZD0iTTE1IDE4aC01Ii8+PHBhdGggZD0iTTE4IDE0aC04Ii8+PHBhdGggZD0iTTQgMjJoMTZhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJIOGEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMS00IDB2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNCIgeD0iMTAiIHk9IjYiIHJ4PSIxIi8+PC9zdmc+" height={12} width={12}/>
                </div>
                <div className="p-2">
                   <NewsComponent title={"The sports conversations to join this..."} days={12} readers={"1290"}/>
                   <NewsComponent title={"The sports conversations to join this..."} days={12} readers={"1290"}/>
                   <NewsComponent title={"The sports conversations to join this..."} days={12} readers={"1290"}/>
                   <NewsComponent title={"The sports conversations to join this..."} days={12} readers={"1290"}/>
                   <NewsComponent title={"The sports conversations to join this..."} days={12} readers={"1290"}/>
                   <div className="font-bold">Show more news</div>
                </div>
                <div>
                <p className="font-bold mx-2 text-2xl my-3">Today's Puzzles</p>
                </div>
                <Puzzles imgUrl={'https://i.pinimg.com/736x/68/74/9a/68749a1fe2e30170d08fa0db7314f5a0.jpg'} title={"Game 1"} desc={"Game description"}/>
                <Puzzles imgUrl={'https://i.pinimg.com/736x/68/74/9a/68749a1fe2e30170d08fa0db7314f5a0.jpg'} title={"Game 1"} desc={"Game description"}/>
                <Puzzles imgUrl={'https://i.pinimg.com/736x/68/74/9a/68749a1fe2e30170d08fa0db7314f5a0.jpg'} title={"Game 1"} desc={"Game description"}/>
                <Puzzles imgUrl={'https://i.pinimg.com/736x/68/74/9a/68749a1fe2e30170d08fa0db7314f5a0.jpg'} title={"Game 1"} desc={"Game description"}/>
            </div>
        </div>
        </>
    )
}
export default RightScreen;