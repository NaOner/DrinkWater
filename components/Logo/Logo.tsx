import {Image} from "expo-image";
import { View } from "react-native";
import {styles} from "@/components/Drink/Drink.style";


function Logo(){
    return(
        <View>
            <Image source={require("../../assets/images/Logo.png")} style={{width: 200, height: 200}}/>
        </View>
    )
}

export default Logo