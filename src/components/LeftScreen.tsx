import Premium from "./Premium";
import ProfileCard from "./ProfileCard";

function LeftScreen(){
    return (
        <>
        <div className="flex flex-col">
            <ProfileCard img1={"https://i.pinimg.com/736x/14/ca/04/14ca04dca6e0ff16418f58f0c228bfdd.jpg"} img2={"https://i.pinimg.com/736x/30/2d/6b/302d6bfe12944edd316a4954b82faac3.jpg"} name={"Gadha Sala"} desc={"Top 800 Qualified"} state={"Gujarat"} currentPosi={"Founding Engineer"}/>
            <Premium/>
        </div>
        </>
    )
}
export default LeftScreen;