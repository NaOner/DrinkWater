import {Text, View} from "react-native";
import { styles } from "./Counter.style";
import { DrinkRecord } from "@/types";
import { useMemo } from "react";

interface CounterProps {
    limit: number,
    records: DrinkRecord[]
}

function Counter({limit, records}: CounterProps) {
    const totalVolume = useMemo(
        () => records.reduce((acc, record) => acc + record.volume, 0),
        [records]
    );

    const progressPercent = Math.min((totalVolume / limit) * 100, 100);

    return (
        <>
            <Text style={styles.lightShadow}>
                <Text style={styles.counted}>{totalVolume}</Text>
                <Text style={styles.limit}>/{limit}</Text>
            </Text>

            <View style={styles.counter}>
                <View style={{width: `${progressPercent}%`, backgroundColor: 'blue'}}></View>
            </View>
        </>
    )
}

export default Counter


