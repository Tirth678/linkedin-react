import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import CenterScreen from "./CenterScreen";
function MainScreen () {
    return (

        <>
        <div className="flex flex-row justify-evenly gap-2 mt-15 items-start mx-17">
        <LeftScreen/>
        <CenterScreen/>
        <RightScreen/>
        </div>
        </>
    )
}
export default MainScreen;