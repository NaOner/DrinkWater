import { Text, View } from "react-native";
import DisplayHistory from "@/components/DisplayHistory/DisplayHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./DailyReport.style";
import {useFocusEffect} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";
import {useCallback} from "react";

interface waterParameters {
    type: string,
    volume: number,
    date: Date,
}


function DailyReport() {


    const [water, setWater] = useState<waterParameters[]>([]);


    useFocusEffect(
        useCallback(() => {
            void (async () => {
                const json = await AsyncStorage.getItem("waterArr")
                if (json) {
                    const parsed = JSON.parse(json).map((item: waterParameters)=> ({
                        ...item,
                        date: new Date(item.date)
                    }) )
                    setWater(parsed)
                }
            })()
        }, [])
    )

    console.log(water)

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Daily drinks raport</Text>
                <DisplayHistory water={water}/>
            </View>
        </SafeAreaView>
    )
}


export default DailyReport