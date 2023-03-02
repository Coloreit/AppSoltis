import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React from 'react'

const ModalComponent = ({ modalVisible, selectedItem, removeItem, setModalVisible, setSelectedItem }) => {
    return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
            <View>
                <Text style={styles.modalTitle}>Remover elemento</Text>
            </View>
            <View>
                <Text style={styles.modalContent}>¿Estás seguro de que querés eliminar "{selectedItem?.value}"?</Text>
            </View>
            <View style={styles.modalActions}>
                <Pressable style={styles.button} onPress={()=>{
                setModalVisible(false)
                setSelectedItem(null);
                }}> 
                    <Text>Cancelar</Text>
                </Pressable>
            <Pressable style={styles.button} onPress={()=>{
                removeItem(selectedItem.id)
            }}> 
                <Text>Eliminar</Text>
            </Pressable>
            </View>
        </View>
    </Modal>
    )
}

export default Modal

const styles = StyleSheet.create({ modalContainer: {
    height: 250,
    width: 300,
    margin: 50,
    backgroundColor: 'turquoise',
    textAlign: 'center',
    borderRadius: 10,
    },
    modalTitle: {
        padding: 10,
        color: 'ivory',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContent: {
        color: 'salmon',
        padding: 5,
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    modalActions: {
        margin: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'mistyrose',
        textAlign: 'center',
        alignItems:'center'
    },
})