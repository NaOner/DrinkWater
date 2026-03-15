// Here I import system components
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";

// Here I import my components
import { Counter } from "@/components/Counter";
import { Logo } from "@/components/Logo";
import { Drink } from "@/components/Drink";
import {useEffect, useState} from "react";
import { UndoButton } from "@/components/UndoButton";
import { DrinkSelection } from "@/components/DrinkSelection";

import styles from "./MainPage.style";
import {DrinkType, DrinkRecord} from "@/types";
import {DrinkDTO} from "@/types/drink";
import {DRINKS} from "@/constants/drink";

export default function Index(){
    const [water, setWater] = useState<DrinkRecord[]>([])

    const limit = 2500

    // function that load array from AsyncStorage
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

    // function that save array to AsyncStorage
    useEffect(()=>{
        void AsyncStorage.setItem("waterArr", JSON.stringify(water))
    }, [water])

    // function that add drink to array
    const handleCreateWater = (type: DrinkType, volume: number) => {
        const drink = {
            type,
            volume,
            date: new Date()
        }
        setWater((prev) => {return [drink, ...prev]})
    }

    // function that remove drink from array
    const handleUndoWater = ()=> {
        return setWater((prev) => { return prev.slice(1)})
    }



    const [selectedDrink, setSelectedDrink] = useState<DrinkDTO>(DRINKS[0])


    return (
        <LinearGradient colors={['#043b6c', '#439be8']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background}>

            <SafeAreaView>

                <View style={styles.logoSection}>
                    <Logo/>
                    <Text style={styles.logoText}>
                    </Text>
                </View>

                <View style={styles.counterSection}>
                    <Counter limit={limit} array={water} />
                </View>

                <View style={styles.drinkSection}>
                    <DrinkSelection selected={selectedDrink.type} onSelect={(type) => {
                        const drink = DRINKS.find((d) => d.type === type)
                        if (drink) setSelectedDrink(drink)
                    }}/>
                    <Drink type={selectedDrink.type} volume={selectedDrink.volume} onWaterCreate={handleCreateWater}/>
                </View>

                <View style={styles.undoButtonSection}>
                    <UndoButton onPress={handleUndoWater} data={water}/>
                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}
