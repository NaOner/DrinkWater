import { View, Text } from "react-native";
import { Counter } from "../../components/Counter";
import { Logo } from "../../components/Logo";
import { Drink } from "../../components/Drink";
import {useEffect, useState} from "react";
import { UndoButton } from "@/components/UndoButton";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./MainPage.style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LinearGradient} from "expo-linear-gradient";
interface waterParameters {
    type: string,
    volume: number,
    date: Date,
}



export default function Index(){
    const [water, setWater] = useState<waterParameters[]>([])

    const limit = 2500

    useEffect(()=>{
        const save = async () => {
            try {
                const json = await AsyncStorage.getItem("waterArr")
                if (json) setWater(JSON.parse(json))
            } catch (error) {
                console.log(error)
            }
        };
        void save();
    }, [])

    useEffect(()=>{
        void AsyncStorage.setItem("waterArr", JSON.stringify(water))
    }, [water])



    const handleCreateWater = (type: string, volume: number) => {
        const drink = {
            type,
            volume,
            date: new Date()
        }
        setWater((prev) => {return [drink, ...prev]})
    }

    const handleUndoWater = ()=> {
        return setWater((prev) => { return prev.slice(1)})
    }

    return (
        <LinearGradient colors={['#034f91', '#b5c2cd']} start={{ x: 0, y: 1 }} end={{ x: 0, y: -1 }} style={styles.background}>

            <SafeAreaView>

                <View style={styles.logoSection}>
                    <Text style={styles.logoText}>
                        DAILY LIMIT
                    </Text>
                    <Logo/>
                </View>

                <View style={styles.counterSection}>
                    <Counter limit={limit} array={water} />
                </View>

                <View style={styles.drinkSection}>
                    <Drink onWaterCreate={handleCreateWater}/>
                </View>

                <View style={styles.undoButtonSection}>
                    <UndoButton onPress={handleUndoWater} data={water}/>
                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}
