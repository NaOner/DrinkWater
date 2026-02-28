import {Text, View} from "react-native";
import { styles } from "./Counter.style";

interface WaterProps {
    limit: number,
    water: waterParameters[]
}

interface waterParameters {
    type: string,
    volume: number,
    date: Date,
}

function Counter({limit, water}: WaterProps) {

    function calculateWater() {
        return water.reduce((acc: number, element: waterParameters ) => acc + element.volume, 0)
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


