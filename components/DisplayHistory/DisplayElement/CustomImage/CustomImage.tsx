
import { Image } from "react-native";
import {useEffect, useState} from "react";
import {styles} from "./CustomImage.style";

interface parameters {
    item: string,
}

interface icons {
    type: string,
    iconPath: number
}

const iconsArr: icons[] = [{
    type: "water",
    iconPath: require("../../../../assets/images/szklanka.png")
}]

function CustomImage({ item }: parameters) {

    const [icon, setIcon] = useState<number | undefined>(undefined)

    useEffect(() => {
        const found = iconsArr.find((el) => el.type === item)
        setIcon(found?.iconPath)
    }, [item]);


    return (
        <Image source={icon} style={styles.image}/>
    )

}

export default CustomImage
