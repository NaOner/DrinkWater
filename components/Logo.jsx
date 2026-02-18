import mascot from "../assets/images/Drip.png";
import {Image} from "expo-image";

export default function Logo(){
    return(
        <Image source={mascot} style={{width: 200, height: 200}}/>
    )
}