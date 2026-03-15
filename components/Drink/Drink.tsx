import { Image,  View, TouchableOpacity, Text} from "react-native";
import { styles } from "./Drink.style";
import {LinearGradient} from "expo-linear-gradient";
import {DrinkType} from "@/types";
import {DrinkDTO} from "@/types/drink";
import {DRINK_IMAGES} from "@/constants/drink";

interface WaterProps {
    type: DrinkDTO['type'],
    volume: DrinkDTO['volume'],
    onWaterCreate: (type: DrinkType, volume: number) => void
}

function Drink({onWaterCreate, type, volume}: WaterProps) {
    return  (
            <TouchableOpacity  onPress={()=> onWaterCreate(type, volume,)} activeOpacity={0.7} style={styles.touchable}>

                <LinearGradient colors={['rgba(2,56,124,0.83)', 'rgb(63,133,250)']} start={{ x: 0, y: 1 }} end={{ x: 0, y: -1 }} style={styles.background}>

                    <View style={styles.container}>
                        <Image source={DRINK_IMAGES[type]} style={styles.image}/>
                        <Text style={styles.text}>
                            {`${volume} ml`}
                        </Text>
                    </View>

                </LinearGradient>

            </TouchableOpacity>
    )
}

export default Drink
