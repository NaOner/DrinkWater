import {Text, TouchableOpacity} from "react-native";

interface element {
    type: string,
    volume: number,
    date: Date,
}

interface UndoButtonProps {
    data: element[],
    onPress: (data: element[]) => void
}



function UndoButton({ data, onPress}: UndoButtonProps) {
    return (
        <TouchableOpacity onPress={() => { onPress(data) }}>
            <Text>Undo</Text>
        </TouchableOpacity>
    )
}

export default UndoButton

