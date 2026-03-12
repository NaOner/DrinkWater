import {Image} from "expo-image";
import { View } from "react-native";
import styles from "./Logo.style";


function Logo(){
    return(
        <View>
            <Image source={require("../../assets/images/Logo.png")} style={styles.logo}/>
        </View>
    )
}

export default Logo