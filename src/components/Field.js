import React from "react"
import { View, StyleSheet } from 'react-native'
import params from '../params'

export default props => {
    const styleField = [StyleSheet.field]
    // Outro estiles aqui!
    if (styleField.length === 1) styleField.push(StyleSheet.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const style = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderButtomColor: '#333',
    }
})