import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handleClick }) => {
    return (
        <TouchableOpacity onPress={handleClick} style={styles.button}>
            <Text style={{ color: "white", fontSize: 23 }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        borderRadius: 5,

    }
})

export default CustomButton