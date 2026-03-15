import { Image } from "react-native";
import {styles} from "./CustomImage.style";
import {DrinkType} from "@/types/drink";
import {DRINK_IMAGES} from "@/constants/drink";

interface parameters {
    item: string,
}

function CustomImage({ item }: parameters) {
    return (
        <Image source={DRINK_IMAGES[item as DrinkType]} style={styles.image}/>
    )
}

export default CustomImage
