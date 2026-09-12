import IconDropDown from "./IconDropDown";
import Icons from "./Icons";
import { House } from 'lucide-react';
function Navbar () {
    return (
    <>
    <div className="flex justify-between px-80 py-1 border-b-1">
        <div className="flex flex-row">
            <img className="mx-5" src="./src/assets/logo.png" height={50} width={50}/>
            <input className="px-7 h-8 rounded-3xl mt-2 hover:border-2" type="text" placeholder="Search"/>
        </div>
        <div className="flex flex-row mt-2">
            <Icons title={"Home"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTZhMiAyIDAgMCAxIDIuNTgyIDBsNyA2QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg=="} height={23} width={23} href="#"/>
            <Icons title={"My Network"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxwYXRoIGQ9Ik0xNiAzLjEyOGE0IDQgMCAwIDEgMCA3Ljc0NCIvPjxwYXRoIGQ9Ik0yMiAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3Ii8+PGNpcmNsZSBjeD0iOSIgY3k9IjciIHI9IjQiLz48L3N2Zz4="} height={23} width={23} href="#"/>
            <Icons title={"Jobs"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyaWVmY2FzZS1idXNpbmVzcyI+PHBhdGggZD0iTTEyIDEyaC4wMSIvPjxwYXRoIGQ9Ik0xNiA2VjRhMiAyIDAgMCAwLTItMmgtNGEyIDIgMCAwIDAtMiAydjIiLz48cGF0aCBkPSJNMjIgMTNhMTguMTUgMTguMTUgMCAwIDEtMjAgMCIvPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgeD0iMiIgeT0iNiIgcng9IjIiLz48L3N2Zz4="} height={23} width={23} href="#"/>
            <Icons title={"Messages"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2VzLWNpcmNsZSI+PHBhdGggZD0iTTE5Ljk1IDEwLjA1YTcgNyAwIDAxMS40MTIgNy44NzIgMSAxIDAgMDAtLjA1OC43ODdsLjY3NSAyLjA4OWExIDEgMCAwMS0xLjIzNiAxLjE2OGwtMi4xNTUtLjYzMWExIDEgMCAwMC0uNzQ1LjA2IDcgNyAwIDAxLTcuNzkzLTEuNDQ1Ii8+PHBhdGggZD0iTTIuNjk2IDEyLjcwOGExIDEgMCAwMC0uMDU4LS43ODUgNyA3IDAgMTEzLjUxOCAzLjQ3MyAxIDEgMCAwMC0uNzQ0LS4wNjFsLTIuMTU1LjYzYTEgMSAwIDAxLTEuMjM2LTEuMTY3eiIvPjwvc3ZnPg=="} height={23} width={23} href="#"/>
            <Icons title={"Notifications"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlbGwiPjxwYXRoIGQ9Ik0xMC4yNjggMjFhMiAyIDAgMCAwIDMuNDY0IDAiLz48cGF0aCBkPSJNMy4yNjIgMTUuMzI2QTEgMSAwIDAgMCA0IDE3aDE2YTEgMSAwIDAgMCAuNzQtMS42NzNDMTkuNDEgMTMuOTU2IDE4IDEyLjQ5OSAxOCA4QTYgNiAwIDAgMCA2IDhjMCA0LjQ5OS0xLjQxMSA1Ljk1Ni0yLjczOCA3LjMyNiIvPjwvc3ZnPg=="} height={23} width={23} href="#"/>
            <IconDropDown href={""} title={"Me"} imgUrl={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.n81adTJe2OBTUV_VHdKDVQHaHa%3Fpid%3DApi&f=1&ipt=1049f3511281d8c0ce656a8523e76f109ecefa074172d2b3589f04c7aae2f38f&ipo=images"} height={25} width={25}/>
            <IconDropDown href={""} title={"For Bussiness"} imgUrl={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyaWQtM3gzIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIi8+PHBhdGggZD0iTTMgOWgxOCIvPjxwYXRoIGQ9Ik0zIDE1aDE4Ii8+PHBhdGggZD0iTTkgM3YxOCIvPjxwYXRoIGQ9Ik0xNSAzdjE4Ii8+PC9zdmc+"} height={25} width={25}/>
        </div>
    </div>
    </>
    );
}
export default Navbar;