import React from "react"
import { View, StyleSheet } from "react-native"

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coneMine}></View>
            <View style={styles.line}></View>
            <View style={[styles.line, { transform : [{ rotate: '45deg'}]}]}></View>
            <View style={[styles.line, { transform : [{ rotate: '90deg'}]}]}></View>
            <View style={[styles.line, { transform : [{ rotate: '135deg'}]}]}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
    }
})