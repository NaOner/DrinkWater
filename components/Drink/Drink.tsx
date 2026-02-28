import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { styles } from "./Drink.style";

interface WaterProps {
    onWaterCreate: (type: string, volume: number) => void
}

function Drink({onWaterCreate , ...props}: WaterProps) {

    return  <View style={styles.drinks}>
        <TouchableOpacity  onPress={()=> {
            onWaterCreate("woda", 200)
        }}
                           activeOpacity={0.6}
        >
            <Image style={styles.szklanka_wody} source={require("../../assets/images/Szklanka_wody.png")}/>
        </TouchableOpacity>
    </View>
}

export default Drink
