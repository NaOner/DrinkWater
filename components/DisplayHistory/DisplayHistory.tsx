import { View} from "react-native"
import styles from "./DisplayHistory.style"
import { DisplayElement }  from "@/components/DisplayHistory/DisplayElement"

function DisplayHistory() {
    return (
        <View style={styles.container}>
            <DisplayElement/>
        </View>
    )
}

export default DisplayHistory