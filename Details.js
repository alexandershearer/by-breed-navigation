import React from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
import Style from "./Style";

function DetailsScreen({ navigation, route }) {
    const { item } = route.params;

    const keys = Object.keys(item);
    keys.unshift(keys.pop());

    const average = (
        Object.keys(item)
            .filter((key) => key !== "breed")
            .reduce((acc, key) => {
                return acc + item[key];
            }, 0) / keys.length
    ).toFixed(1);

    return (
        <View style={styles.view}>
            <FlatList
                style={styles.featureContainer}
                data={keys}
                renderItem={(key) => {
                    if (key.item === "breed")
                        return (
                            <Text style={styles.text}>
                                {item.breed} {average}
                            </Text>
                        );
                    else {
                        return <Style name={key.item} value={item[key.item]} />;
                    }
                }}
                keyExtractor={(item) => item}
            />

            <Button
                color={"#ffffff"}
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    featureContainer: {
        width: "100%",
        padding: 10,
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    text: {
        fontSize: 30,
        marginBottom: 10,
        fontFamily: "Futura",
        textAlign: "center",
        color: "#ffffff",
    },
});

export default DetailsScreen;