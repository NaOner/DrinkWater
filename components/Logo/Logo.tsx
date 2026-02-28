import {Image} from "expo-image";

function Logo(){
    return(
        <Image source={require("../../assets/images/Drip.png")} style={{width: 200, height: 200}}/>
    )
}

export default Logo