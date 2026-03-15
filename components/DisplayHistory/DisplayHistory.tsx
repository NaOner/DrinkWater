import { ScrollView, View} from "react-native"
import styles from "./DisplayHistory.style"
import { DisplayElement }  from "@/components/DisplayHistory/DisplayElement"
import {DrinkRecord} from "@/types";

interface DisplayHistoryProps {
    water: DrinkRecord[]
}

function DisplayHistory({ water }: DisplayHistoryProps) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
            >
                {water.map((item, index) => (
                    <DisplayElement key={index} item={item}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default DisplayHistory
