import { Image } from "react-native";
import { styles } from "./CustomImage.style";
import { DrinkType } from "@/types/drink";
import { DRINK_IMAGES } from "@/constants/drink";

interface CustomImageProps {
    type: DrinkType;
}

function CustomImage({ type }: CustomImageProps) {
    return <Image source={DRINK_IMAGES[type]} style={styles.image} />;
}

export default CustomImage;
