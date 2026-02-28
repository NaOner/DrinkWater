import { StyleSheet, View } from "react-native";


import { Counter } from "../../components/Counter";
import { Logo } from "../../components/Logo";
import { Drink } from "../../components/Drink";
import { useState } from "react";
import { Spacer } from "../../components/Spacer";
import {SafeAreaView} from "react-native-safe-area-context";


interface waterParameters {
    type: string,
    volume: number,
    date: Date,
}

export default function Index(){
    const [water, setWater] = useState<waterParameters[]>([])

    const limit = 2500


    const handleCreateWater = (type: string, volume: number) => {

        const drink = {
            type,
            volume,
            date: new Date()
        }

        setWater((prev) => {
            return [drink, ...prev]
        })
        console.log(water)
    }



    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Counter limit={limit} water={water} >
                </Counter>
                <Logo/>
                <Spacer />
                <Drink onWaterCreate={handleCreateWater}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#b7edf6"
    }, safeArea: {
        flex: 1,
        backgroundColor: "#b7edf6"
    },
})
