import {Pressable, StyleSheet, View} from "react-native";

import Counter from "../components/Counter";
import Logo from "../components/Logo";
import Drink from "../components/Drink";


import szklanka_wody_200ml from "../assets/images/Szklanka_wody.png"
import {Image} from "expo-image";
import {useState} from "react";
import {Link} from "expo-router";


export default function Index() {

    const [water, setWater] = useState([])

    const limit = 2500

    console.log(water)


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

              <Link href={"./(DailyHistory)/history"}>
                  <Counter limit={limit} />
              </Link>

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
    },
    szklanka_wody: {
        width: 200,
        height: 150,
    },
    drinks: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: "100%",
        height: "30%",
    }
})
