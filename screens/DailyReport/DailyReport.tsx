import { Text, View, ActivityIndicator } from "react-native";
import DisplayHistory from "@/components/DisplayHistory/DisplayHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./DailyReport.style";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDrinkRecords } from "@/hooks/useDrinkRecords";

function DailyReport() {
    const { drinkRecords, isLoading, error, refetch } = useDrinkRecords();

    useFocusEffect(
        useCallback(() => {
            void refetch();
        }, [refetch]),
    );

    return (
        <LinearGradient
            colors={["#034f91", "#439be8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.background}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Daily drinks report</Text>
                </View>

                {error && (
                    <View style={styles.errorSection}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}

                <View style={styles.displaySection}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="white" />
                    ) : (
                        <DisplayHistory drinkRecords={drinkRecords} />
                    )}
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default DailyReport;
