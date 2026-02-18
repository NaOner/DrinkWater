import {Pressable, StyleSheet, View} from "react-native";

import Counter from "../components/Counter";
import Logo from "../components/Logo";

import szklanka_wody_200ml from "../assets/images/Szklanka_wody.png"
import {Image} from "expo-image";
import {useState} from "react";
import {Link} from "expo-router";


export default function Index() {

    const [water, setWater] = useState(0)

    let limit = 2500

    function drink(x){
        setWater(water + x)
    }


    return (
          <View style={styles.container}>
              <Link href={"./(DailyHistory)/history"}></Link><Counter limit={limit} drunkWater={water} />

              <Logo/>

              <View style={styles.drinks}>
                  <Pressable
                      onPressIn={()=>{drink(200)}}
                  >
                      <Image style={styles.szklanka_wody} source={szklanka_wody_200ml}/>
                  </Pressable>

              </View>
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
