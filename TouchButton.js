import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

function TouchButton({ title, showDetails }) {
    return (
        <TouchableHighlight
            style={styles.TouchableHighlight}
            onPress={() => showDetails()}
            underlayColor="#ffffff"
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    TouchableHighlight: {
        padding: 20,
    },

    text: {
        fontSize: 20,
        fontFamily: "Futura",
        color: "#ffffff",
    },
});

export default TouchButton;