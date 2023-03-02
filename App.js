import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList, Pressable, Modal, Image } from 'react-native';

export default function App() {
  const [itemText, setItemText] = useState('');
  const [items, setItems] = useState([]);

  const onChangeText = (text) => {
    setItemText(text);
  }

  const addItem = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText('');
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const removeItem = (id) => {
    setModalVisible(false);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  }

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <Image
        source={require('./public/images/carrito1.jpg')}
        style={{width: '98%', height: 100}}
      />
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Texto' 
        style={styles.input} 
        onChangeText={onChangeText} 
        value={itemText} 
        />
        <Button title='agregar' onPress={addItem}/>
      </View>
      <FlatList 
        data={items}
        renderItem={(itemData) => (
          <Pressable style={styles.itemContainer} onPress={() => {
            selectItem(itemData.item)
          }}>
            <Text style={styles.item}> {itemData.item.value} </Text>
          </Pressable>
        )}
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
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
  modalContainer: {
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
});
