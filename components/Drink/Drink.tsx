import { View, TouchableOpacity } from "react-native";
import { styles } from "./Drink.style";
import {LinearGradient} from "expo-linear-gradient";

interface WaterProps {
    onWaterCreate: (type: string, volume: number) => void
}

function Drink({onWaterCreate , ...props}: WaterProps) {

    return  (
            <TouchableOpacity  onPress={()=> {
                onWaterCreate("woda", 200)
            }}
                               activeOpacity={0.7}
            >
                <LinearGradient colors={['#022549', 'rgba(7,86,186,0.83)']} start={{ x: 0, y: 1 }} end={{ x: 0, y: -1 }} style={styles.background}>
                    <View style={styles.background}>
                        <>Tu będzie zdjęcie szklanki wody</>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
    )
}

export default Drink
