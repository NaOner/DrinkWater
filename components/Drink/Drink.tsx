import { Image,  View, TouchableOpacity, Text} from "react-native";
import { styles } from "./Drink.style";
import {LinearGradient} from "expo-linear-gradient";

interface WaterProps {
    selected: string,
    onWaterCreate: (type: string, volume: number) => void
}

interface drinkObject {
    type: string
    volume: number
    icon?: number
}

const drinks: drinkObject[] = [
    {
        type: "Water",
        volume: 200,
        icon: require("../../assets/images/szklanka.png")
    },
    {
        type: "Tea",
        volume: 200,
        icon: require("../../assets/images/Tea.png")
    },
    {
        type: "Coffee",
        volume: 100,
        icon: require("../../assets/images/Coffe.png")
    }
]

function Drink({selected, onWaterCreate , ...props}: WaterProps) {

    const drink = drinks.find((el) => el.type === selected)

    return  (
            <TouchableOpacity  onPress={()=> {onWaterCreate(drink?.type || "Water", drink?.volume || 200,)}} activeOpacity={0.7} style={styles.touchable}>

                <LinearGradient colors={['rgba(2,56,124,0.83)', 'rgb(63,133,250)']} start={{ x: 0, y: 1 }} end={{ x: 0, y: -1 }} style={styles.background}>

                    <View style={styles.container}>
                        <Image source={drink?.icon} style={styles.image}/>
                        <Text style={styles.text}>
                            {drink?.volume} ml
                        </Text>
                    </View>

                </LinearGradient>

            </TouchableOpacity>
    )
}

export default Drink
