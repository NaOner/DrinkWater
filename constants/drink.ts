import { DRINK_TYPE_ENUM, DrinkType, DrinkDTO } from "@/types/drink";
import { ImageSourcePropType } from "react-native";

export const DRINK_IMAGES: Record<DrinkType, ImageSourcePropType> = {
    [DRINK_TYPE_ENUM.Water]: require("../assets/images/szklanka.png"),
    [DRINK_TYPE_ENUM.Tea]: require("../assets/images/Tea.png"),
    [DRINK_TYPE_ENUM.Coffee]: require("../assets/images/Coffe.png"),
};

export const DRINKS: DrinkDTO[] = [
    { type: DRINK_TYPE_ENUM.Water, volume: 200 },
    { type: DRINK_TYPE_ENUM.Tea, volume: 200 },
    { type: DRINK_TYPE_ENUM.Coffee, volume: 100 },
];
