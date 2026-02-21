import {StyleSheet, View} from "react-native";

import { Counter } from "../components/Counter";
import Logo from "../components/Logo";
import { Drink } from "../components/Drink";

import {useState} from "react";


export default function Index() {
    const [water, setWater] = useState([])

    const limit = 2500

    const handleCreateWater = (type, volume) => {

        const drink = {
            type,
            volume,
            date: new Date()
        }

        setWater((prev) => [...prev, drink])

    }


    return (
          <View style={styles.container}>
              <Counter limit={limit} water={water} />
              <Logo/>
              <Drink onWaterCreate={handleCreateWater}/>
          </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#b7edf6"
    }
})
