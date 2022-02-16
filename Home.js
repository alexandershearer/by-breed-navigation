import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { cats, dogs } from "./breeds";
import TouchButton from "./TouchButton";

function Home({ navigation }) {
    const [breeds, setBreeds] = useState(cats);
    return (
        <View style={styles.view}>
            <FlatList
                style={styles.list}
                data={breeds}
                renderItem={({ item, index }) => {
                    return (
                        <TouchButton
                            title={item.breed}
                            showDetails={() => navigation.navigate("Details", { item })}
                        />
                    );
                }}
                keyExtractor={(item) => item.breed}
            />
            <View style={styles.buttons}>
                <Button
                    onPress={() => setBreeds(cats)}
                    title="Cats"
                    color={"#ffffff"}
                />
                <Button
                    onPress={() => setBreeds(dogs)}
                    title="Dogs"
                    color={"#ffffff"}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttons: {
        width: "100%",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    list: {
        flex: 1,
        width: "100%",
    },
});
export default Home;