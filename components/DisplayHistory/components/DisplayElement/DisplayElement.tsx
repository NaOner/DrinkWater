import {View, Text } from "react-native";
import styles from "./DisplayElement.style";
import { CustomImage } from "../CustomImage";
import { DrinkRecord } from "@/types";
import dayjs from "dayjs";

interface DisplayElementProps {
    record: DrinkRecord
}

function formatTime(date: Date): string {
    return dayjs(date).format("HH:mm");
}

function DisplayElement({ record }: DisplayElementProps) {
    return (
        <View style={styles.element}>
            <CustomImage type={record.type}/>
            <Text style={styles.text}>
                - {record.volume} ml - {formatTime(record.date)}
            </Text>
        </View>
    )
}

export default DisplayElement
