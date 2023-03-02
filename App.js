import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ListaItem } from './components';
import AddItem from './components';
import ModalComponent from './components';

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

      <AddItem 
      onChangeText={onChangeText}
      itemText={itemText}
      addItem={addItem}
      />

      <ListaItem items={items} selectItem={selectItem} />

      <ModalComponent 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      removeItem={removeItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
