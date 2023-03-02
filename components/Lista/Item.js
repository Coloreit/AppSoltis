import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Item = ({ selectItem, itemData }) => {
    return (
        <Pressable style={styles.itemContainer} onPress={() => {
            selectItem(itemData.item)
            }}>
            <Text style={styles.item}> {itemData.item.value} </Text>
        </Pressable>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 178, 172, 0.9)',
    },
    item: {
        padding: 10,
        margin: 5,
        color: 'steelblue',
        textAlign: 'center',
    },
})