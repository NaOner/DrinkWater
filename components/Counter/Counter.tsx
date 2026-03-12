import {Text, View} from "react-native";
import { styles } from "./Counter.style";

interface props {
    limit: number,
    array: parameters[]
}

interface parameters {
    type: string,
    volume: number,
    date: Date,
}

function Counter({limit, array}: props) {

    function calculateWater() {
        return array.reduce((acc: number, element: parameters ) => acc + element.volume, 0)
    }

    const counted = calculateWater()


    return (
        <>
            <Text style={styles.lightShadow}>
                <Text style={styles.counted}>{counted}</Text>
                <Text style={styles.limit}>/{limit}</Text>
            </Text>

            <View style={styles.counter}>
                <View style={{width: 30, backgroundColor: 'blue'}}></View>
            </View>
        </>
    )
}

export default Counter


