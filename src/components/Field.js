import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'
import Mines from './Mines'
import Flag from './Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [style.field]
    // Outro estiles aqui!
    if (opened) styleField.push(style.opened)
    if (exploded) styleField.push(style.exploded)
    if (flagged) styleField.push(style.flagged)
    if (!opened && !exploded) styleField.push(style.regular)

    let color = null
    if (nearMines) {
        if (nearMines == 1) color = '#2A28D7'
        if (nearMines == 2) color = '#2B5207'
        if (nearMines > 2 && nearMines < 6) color = '#F9060A'
        if (nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
            <Text style={[style.label, {color: color}]}>{nearMines}</Text> : false}
            {mined && opened ? <Mines /> : false}
            {flagged && !opened ? <Flag /> : false}
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
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})