import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddItem = ({ onChangeText, itemText, addItem}) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Texto' 
            style={styles.input} 
            onChangeText={onChangeText} 
            value={itemText} 
            />
            <Button title='agregar' onPress={addItem}/>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    input: {
        width: 200,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
})