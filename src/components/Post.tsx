import type { ReactNode } from "react";

interface PostProps {
    name?: string
    profilePic?: string
    description?: string
    updatedAt: string
    postDescription: string
    postImage?: string
}

const ICONS = {
    globe: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdsb2JlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAyYTE0LjUgMTQuNSAwIDAgMCAwIDIwIDE0LjUgMTQuNSAwIDAgMCAwLTIwIi8+PHBhdGggZD0iTTIgMTJoMjAiLz48L3N2Zz4=",
    ellipsis: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVsbGlwc2lzIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxMiIgcj0iMSIvPjwvc3ZnPg==",
    like: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCI+PHBhdGggZD0iTTE1IDUuODggMTQgMTBoNS44M2EyIDIgMCAwIDEgMS45MiAyLjU2bC0yLjMzIDhBMiAyIDAgMCAxIDE3LjUgMjJINGEyIDIgMCAwIDEtMi0ydi04YTIgMiAwIDAgMSAyLTJoMi43NmEyIDIgMCAwIDAgMS43OS0xLjExTDEyIDJhMy4xMyAzLjEzIDAgMCAxIDMgMy44OFoiLz48cGF0aCBkPSJNNyAxMHYxMiIvPjwvc3ZnPg==",
    comment: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIj48cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiLz48L3N2Zz4=",
    repost: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJlcGVhdC0yIj48cGF0aCBkPSJtMiA5IDMtMyAzIDMiLz48cGF0aCBkPSJNMTMgMThIN2EyIDIgMCAwIDEtMi0yVjYiLz48cGF0aCBkPSJtMjIgMTUtMyAzLTMtMyIvPjxwYXRoIGQ9Ik0xMSA2aDZhMiAyIDAgMCAxIDIgMnYxMCIvPjwvc3ZnPg==",
    send: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlbmQiPjxwYXRoIGQ9Ik0xNC41MzYgMjEuNjg2YS41LjUgMCAwIDAgLjkzNy0uMDI0bDYuNS0xOWEuNDk2LjQ5NiAwIDAgMC0uNjM1LS42MzVsLTE5IDYuNWEuNS41IDAgMCAwLS4wMjQuOTM3bDcuOTMgMy4xOGEyIDIgMCAwIDEgMS4xMTIgMS4xMXoiLz48cGF0aCBkPSJtMjEuODU0IDIuMTQ3LTEwLjk0IDEwLjkzOSIvPjwvc3ZnPg==",
};

function Icon({ src, className = "" }: { src: string; className?: string }) {
    return (
        <img
            src={`data:image/svg+xml;base64,${src}`}
            className={`h-5 w-5 shrink-0 ${className}`}
            alt=""
        />
    );
}

function Action({ icon, label }: { icon: string; label: string }) {
    return (
        <button className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 text-gray-700 transition-colors hover:bg-gray-100">
            <Icon src={icon} />
            <p>{label}</p>
        </button>
    );
}

function Header({ children }: { children: ReactNode }) {
    return <div className="flex items-start justify-between">{children}</div>;
}

function Post(props: PostProps) {
    return (
        <div className="mt-5 w-full max-w-[750px] rounded-2xl border-2 px-4 py-3">
            {/* Author */}
            <Header>
                <div className="flex items-center gap-3">
                    {props.profilePic ? (
                        <img
                            src={props.profilePic}
                            className="h-12 w-12 shrink-0 rounded-full object-cover"
                            alt={props.name ?? "profile"}
                        />
                    ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
                            {(props.name ?? "A").charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div>
                        <p className="font-bold">{props.name ?? "Anonymous"}</p>
                        <p className="text-sm text-gray-600">{props.description ?? "LinkedIn Member"}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                            <p>{props.updatedAt}</p>
                            <p>•</p>
                            <Icon src={ICONS.globe} className="h-3.5 w-3.5" />
                        </div>
                    </div>
                </div>
                <button className="cursor-pointer rounded-full p-2 hover:bg-gray-100">
                    <Icon src={ICONS.ellipsis} />
                </button>
            </Header>

            {/* Content */}
            <div className="mt-3">
                <p className="whitespace-pre-wrap break-words">{props.postDescription}</p>
            </div>

            {props.postImage && (
                <img
                    src={props.postImage}
                    alt=""
                    className="mt-3 max-h-[500px] w-full rounded-2xl object-cover"
                />
            )}

            {/* Actions */}
            <div className="mt-4 flex items-center justify-around border-t-2 pt-2">
                <Action icon={ICONS.like} label="Like" />
                <Action icon={ICONS.comment} label="Comment" />
                <Action icon={ICONS.repost} label="Repost" />
                <Action icon={ICONS.send} label="Send" />
            </div>
        </div>
    );
}

export default Post;
