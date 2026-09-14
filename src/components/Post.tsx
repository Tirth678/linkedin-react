

interface PostProps {
    name: string
    profilePic: string
    description: string
    photo?: string // optional string ho na ho
    updatredAt: string
    postDescription: string
    postImage: string
}

function Post (props: PostProps) {
    return (
        <>
        <div className="rounded-2xl justify-evenly gap-2">
        <div className="flex flex-col border-2 rounded-2xl mt-5 px-2 py-3 max-w-[750px] w-full">
        <div className="flex place-content-between">
            <div className="flex flex-row">
                <img src={props.profilePic} height={20} width={80} className="rounded-full"/>
                <div className="mx-3">
                <p className="font-bold">{props.name}</p>
                <p>{props.description}</p>
                <div className="flex flex-row">
                    <p className="">{props.updatredAt}</p>
                    <p className="mx-1">•</p>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdsb2JlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAyYTE0LjUgMTQuNSAwIDAgMCAwIDIwIDE0LjUgMTQuNSAwIDAgMCAwLTIwIi8+PHBhdGggZD0iTTIgMTJoMjAiLz48L3N2Zz4=" height={15} width={15}/>
                </div>
                </div>
            </div>
            <div className="flex flex-row mb-9">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVsbGlwc2lzIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxMiIgcj0iMSIvPjwvc3ZnPg==" height={30} width={20}/>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+" height={30} width={20}/>
            </div>
            </div>
            <div className="flex flex-col items-start">

            <div className="mt-5">
                <p className="max-w-[700px]">
                    {props.postDescription}
                </p>
            </div>

            <div>
                <img className="rounded-2xl mt-5 max-w-full" src={props.postImage} alt=""  />
            </div>

        </div>
        <div className="flex flex-row place-content-around mt-5">
            <div className="place-items-center">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTE1IDUuODggMTQgMTBoNS44M2EyIDIgMCAwIDEgMS45MiAyLjU2bC0yLjMzIDhBMiAyIDAgMCAxIDE3LjUgMjJINGEyIDIgMCAwIDEtMi0ydi04YTIgMiAwIDAgMSAyLTJoMi43NmEyIDIgMCAwIDAgMS43OS0xLjExTDEyIDJhMy4xMyAzLjEzIDAgMCAxIDMgMy44OFoiLz48cGF0aCBkPSJNNyAxMHYxMiIvPjwvc3ZnPg==" />
            <p>Like</p>
            </div>
            <div className="place-items-center">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIj48cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiLz48L3N2Zz4="/>
            <p>Comment</p>
            </div>
            <div className="place-items-center">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJlcGVhdC0yIj48cGF0aCBkPSJtMiA5IDMtMyAzIDMiLz48cGF0aCBkPSJNMTMgMThIN2EyIDIgMCAwIDEtMi0yVjYiLz48cGF0aCBkPSJtMjIgMTUtMyAzLTMtMyIvPjxwYXRoIGQ9Ik0xMSA2aDZhMiAyIDAgMCAxIDIgMnYxMCIvPjwvc3ZnPg=="/>
            <p>Repost</p>
            </div>
            <div>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlbmQiPjxwYXRoIGQ9Ik0xNC41MzYgMjEuNjg2YS41LjUgMCAwIDAgLjkzNy0uMDI0bDYuNS0xOWEuNDk2LjQ5NiAwIDAgMC0uNjM1LS42MzVsLTE5IDYuNWEuNS41IDAgMCAwLS4wMjQuOTM3bDcuOTMgMy4xOGEyIDIgMCAwIDEgMS4xMTIgMS4xMXoiLz48cGF0aCBkPSJtMjEuODU0IDIuMTQ3LTEwLjk0IDEwLjkzOSIvPjwvc3ZnPg=="/>
            <p>Send</p>
            </div>
        </div>
            </div>
        </div>
        </>
    )
}
export default Post;