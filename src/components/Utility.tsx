function Utility () {
    return (
        <>
        <div className="border-2 p-5 rounded-2xl mt-2 flex flex-col">
           <div className="flex flex-row mb-4">
           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2ttYXJrIj48cGF0aCBkPSJNMTcgM2EyIDIgMCAwIDEgMiAydjE1YTEgMSAwIDAgMS0xLjQ5Ni44NjhsLTQuNTEyLTIuNTc4YTIgMiAwIDAgMC0xLjk4NCAwbC00LjUxMiAyLjU3OEExIDEgMCAwIDEgNSAyMFY1YTIgMiAwIDAgMSAyLTJ6Ii8+PC9zdmc+"/>
            <h2 className="px-2">Saved Items</h2>
           </div>
           <div className="flex flex-row mb-4">
           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXItZ3JvdXAiPjxwYXRoIGQ9Ik0xNyAyMXYtMWEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2MSIvPjxwYXRoIGQ9Ik0xOSAxMGgxYTIgMiAwIDAxMiAydjEiLz48cGF0aCBkPSJNNSAxMEg0YTIgMiAwIDAwLTIgMnYxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMyIvPjxjaXJjbGUgY3g9IjE4IiBjeT0iNCIgcj0iMiIvPjxjaXJjbGUgY3g9IjYiIGN5PSI0IiByPSIyIi8+PC9zdmc+"/>
            <h2 className="px-2">Groups</h2>
           </div>
           <div className="flex flex-row mb-4">
           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW5ld3NwYXBlciI+PHBhdGggZD0iTTE1IDE4aC01Ii8+PHBhdGggZD0iTTE4IDE0aC04Ii8+PHBhdGggZD0iTTQgMjJoMTZhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJIOGEyIDIgMCAwIDAtMiAydjE2YTIgMiAwIDAgMS00IDB2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNCIgeD0iMTAiIHk9IjYiIHJ4PSIxIi8+PC9zdmc+"/>
            <h2 className="px-2">Newsletters</h2>
           </div>
           <div className="flex flex-row">
           <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbGVuZGFyLWRheXMiPjxwYXRoIGQ9Ik04IDJ2MyIvPjxwYXRoIGQ9Ik0xNiAydjMiLz48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIi8+PHBhdGggZD0iTTMgOWgxOCIvPjxwYXRoIGQ9Ik04IDEzaC4wMSIvPjxwYXRoIGQ9Ik0xMiAxM2guMDEiLz48cGF0aCBkPSJNMTYgMTNoLjAxIi8+PHBhdGggZD0iTTggMTdoLjAxIi8+PHBhdGggZD0iTTEyIDE3aC4wMSIvPjxwYXRoIGQ9Ik0xNiAxN2guMDEiLz48L3N2Zz4="/>
            <h2 className="px-2">Events</h2>
           </div>
        </div>
        </>
    )
}
export default Utility;