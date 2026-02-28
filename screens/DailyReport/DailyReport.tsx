import DisplayHistory from "@/components/DisplayHistory/DisplayHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./DailyReport.style";


function DailyReport() {
    return (
        <SafeAreaView style={styles.container}>
            <DisplayHistory/>
        </SafeAreaView>
    )
}


export default DailyReport