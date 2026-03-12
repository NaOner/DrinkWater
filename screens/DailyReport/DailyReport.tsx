import { Text, View } from "react-native";
import DisplayHistory from "@/components/DisplayHistory/DisplayHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./DailyReport.style";
import {useFocusEffect} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState, useCallback} from "react";
import {LinearGradient} from "expo-linear-gradient";

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
        <LinearGradient colors={['#034f91', '#439be8']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>Daily drinks raport</Text>
                </View>

                <View style={styles.displaySection}>
                    <DisplayHistory water={water}/>
                </View>

            </SafeAreaView>
        </LinearGradient>
    )
}


export default DailyReport