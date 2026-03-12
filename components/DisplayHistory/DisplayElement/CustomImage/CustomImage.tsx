
import { Image } from "react-native";
import {useEffect, useState} from "react";
import {styles} from "./CustomImage.style";

interface parameters {
    item: string,
}

interface icons {
    type: string,
    icon: number
}

const iconsArr: icons[] = [
    {
        type: "Water",
        icon: require("../../../../assets/images/szklanka.png")
    },
    {
        type: "Tea",
        icon: require("../../../../assets/images/Tea.png")
    },
    {
        type: "Coffee",
        icon: require("../../../../assets/images/Coffe.png")
    }
    ]

function CustomImage({ item }: parameters) {

    const [icon, setIcon] = useState<number | undefined>(undefined)

    useEffect(() => {
        const found = iconsArr.find((el) => el.type === item)
        setIcon(found?.icon)
    }, [item]);


    return (
        <Image source={icon} style={styles.image}/>
    )

}

export default CustomImage
