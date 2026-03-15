import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrinkType, DrinkRecord } from "@/types";
import { STORAGE_KEYS } from "@/constants/storage";

interface UseDrinkRecordsReturn {
    drinkRecords: DrinkRecord[];
    isLoading: boolean;
    error: string | null;
    addDrink: (type: DrinkType, volume: number) => void;
    undoLastDrink: () => void;
    refetch: () => void;
}

function parseDrinkRecords(json: string): DrinkRecord[] {
    const parsed = JSON.parse(json) as Array<{ type: DrinkType; volume: number; date: string }>;
    return parsed.map((record) => ({
        ...record,
        date: new Date(record.date),
    }));
}

export function useDrinkRecords(): UseDrinkRecordsReturn {
    const [drinkRecords, setDrinkRecords] = useState<DrinkRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDrinkRecords = useCallback(async () => {
        try {
            setIsLoading(true);
            const json = await AsyncStorage.getItem(STORAGE_KEYS.DRINK_RECORDS);
            if (json) setDrinkRecords(parseDrinkRecords(json));
        } catch (e) {
            setError("Failed to load drink records");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchDrinkRecords();
    }, [fetchDrinkRecords]);

    const saveDrinkRecords = useCallback(async (records: DrinkRecord[]) => {
        try {
            setError(null);
            await AsyncStorage.setItem(STORAGE_KEYS.DRINK_RECORDS, JSON.stringify(records));
        } catch (e) {
            setError("Failed to save drink records");
        }
    }, []);

    const addDrink = useCallback((type: DrinkType, volume: number) => {
        const drink: DrinkRecord = {
            type,
            volume,
            date: new Date(),
        };
        const updated = [drink, ...drinkRecords];
        setDrinkRecords(updated);
        void saveDrinkRecords(updated);
    }, [drinkRecords, saveDrinkRecords]);

    const undoLastDrink = useCallback(() => {
        const updated = drinkRecords.slice(1);
        setDrinkRecords(updated);
        void saveDrinkRecords(updated);
    }, [drinkRecords, saveDrinkRecords]);

    return { drinkRecords, isLoading, error, addDrink, undoLastDrink, refetch: fetchDrinkRecords };
}
