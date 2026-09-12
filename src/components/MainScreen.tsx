import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import CenterScreen from "./CenterScreen";
function MainScreen () {
    return (

        <>
        <div className="flex flex-row justify-evenly mt-15">
        <LeftScreen/>
        <CenterScreen/>
        <RightScreen/>
        </div>
        </>
    )
}
export default MainScreen;