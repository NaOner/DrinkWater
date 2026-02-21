import {Text, View} from "react-native";
import { styles } from "./Counter.style";

function Counter({limit, water}) {

    function calculateWater() {
        return water.reduce((acc, element) => acc + element.volume, 0)
    }

    const drunkWater = calculateWater()


    return (
        <View style={styles.container}>
            <Text>
                <Text style={styles.drunkWater}>{drunkWater}</Text>
                <Text style={styles.limit}>/{limit}</Text>
            </Text>

        </View>
    )
}

export default Counter


