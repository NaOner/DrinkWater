import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Drink.style";

interface WaterProps {
    onWaterCreate: (type: string, volume: number) => void
}

function Drink({onWaterCreate , ...props}: WaterProps) {

    return  (
        <View style={styles.background}>
            <TouchableOpacity  onPress={()=> {
                onWaterCreate("woda", 200)
            }}
                               activeOpacity={0.6}
            >
                <Text>Tu będzie zdjęcie szklanki wody</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Drink
