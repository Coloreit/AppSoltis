import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Item from './Item'

const ListaItem = ({ items, selectItem }) => {
    return (
        <FlatList 
        data={items}
        renderItem={(itemData) => (
            <Item itemData={itemData} selectItem={selectItem} />
        )}
        />
    )
}

export default ListaItem

const styles = StyleSheet.create({})