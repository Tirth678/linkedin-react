import Analytics from "./Analytics";
import Premium from "./Premium";
import ProfileCard from "./ProfileCard";
import Utility from "./Utility";
import profile from "../lib/profile";

function LeftScreen(){
    return (
        <>
        <div className="flex flex-col">
            <ProfileCard img1={profile.coverImg} img2={profile.avatar} name={profile.name} desc={profile.desc} state={profile.state} currentPosi={profile.currentPosi}/>
            <Premium/>
            <Analytics/>
            <Utility/>
        </div>
        </>
    )
}
export default LeftScreen;
