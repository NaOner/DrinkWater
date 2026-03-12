import { Image,  View, TouchableOpacity, Text} from "react-native";
import { styles } from "./Drink.style";
import {LinearGradient} from "expo-linear-gradient";

interface WaterProps {
    onWaterCreate: (type: string, volume: number) => void
}

function Drink({onWaterCreate , ...props}: WaterProps) {

    return  (
            <TouchableOpacity  onPress={()=> {onWaterCreate("water", 200)}} activeOpacity={0.7} style={styles.touchable}>

                <LinearGradient colors={['rgba(2,56,124,0.83)', 'rgb(63,133,250)']} start={{ x: 0, y: 1 }} end={{ x: 0, y: -1 }} style={styles.background}>

                    <View style={styles.container}>
                        <Image source={require("../../assets/images/szklanka.png")} style={styles.image}/>
                        <Text style={styles.text}>
                            200 ml
                        </Text>
                    </View>

                </LinearGradient>

            </TouchableOpacity>
    )
}

export default Drink
