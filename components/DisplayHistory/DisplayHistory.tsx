import { ScrollView, View } from "react-native"
import styles from "./DisplayHistory.style"
import { DisplayElement } from "./components/DisplayElement"
import { DrinkRecord } from "@/types";

interface DisplayHistoryProps {
    drinkRecords: DrinkRecord[]
}

// TODO: Replace ScrollView with FlatList for better performance with large lists
function DisplayHistory({ drinkRecords }: DisplayHistoryProps) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
            >
                {drinkRecords.map((item, index) => (
                    <DisplayElement key={index} record={item}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default DisplayHistory
