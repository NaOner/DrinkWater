import { View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { Counter } from "@/components/Counter";
import { Logo } from "@/components/Logo";
import { Drink } from "@/components/Drink";
import { UndoButton } from "@/components/UndoButton";
import { DrinkSelection } from "@/components/DrinkSelection";

import styles from "./MainPage.style";
import { DrinkDTO } from "@/types/drink";
import { DRINKS, DAILY_DRINK_LIMIT } from "@/constants/drink";
import { useDrinkRecords } from "@/hooks/useDrinkRecords";

export default function Index(){
    const { drinkRecords, isLoading, error, addDrink, undoLastDrink } = useDrinkRecords()
    const [selectedDrink, setSelectedDrink] = useState<DrinkDTO>(DRINKS[0])

    if (isLoading) {
        return (
            <LinearGradient colors={['#043b6c', '#439be8']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background}>
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            </LinearGradient>
        )
    }

    return (
        <LinearGradient colors={['#043b6c', '#439be8']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background}>

            <SafeAreaView>

                <View style={styles.logoSection}>
                    <Logo/>
                </View>

                {error && (
                    <View style={styles.errorSection}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}

                <View style={styles.counterSection}>
                    <Counter limit={DAILY_DRINK_LIMIT} array={drinkRecords} />
                </View>

                <View style={styles.drinkSection}>
                    <DrinkSelection selected={selectedDrink.type} onSelect={(type) => {
                        const drink = DRINKS.find((d) => d.type === type)
                        if (drink) setSelectedDrink(drink)
                    }}/>
                    <Drink type={selectedDrink.type} volume={selectedDrink.volume} onWaterCreate={addDrink}/>
                </View>

                <View style={styles.undoButtonSection}>
                    <UndoButton onPress={undoLastDrink} data={drinkRecords}/>
                </View>

            </SafeAreaView>

        </LinearGradient>
    )
}
