import Icons from "./Icons";
import { GoHomeFill } from "react-icons/go";
function Navbar () {
    return (
    <>
    <div className="flex justify-between px-80 py-1">
        <div className="flex flex-row">
            <img className="mx-5" src="./src/assets/logo.png" height={40} width={40}/>
            <input className="px-7 h-8 rounded-3xl mt-2" type="text" placeholder="Search"/>
        </div>
        <div className="flex flex-row mt-2">
            <Icons title={"Home"} imgUrl={<GoHomeFill />} href="#"/>
            <Icons title={"Home"} imgUrl={""} href="#"/>
            <Icons title={"Home"} imgUrl={""} href="#"/>
            <Icons title={"Home"} imgUrl={""} href="#"/>
        </div>
    </div>
    </>
    );
}
export default Navbar;