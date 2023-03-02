import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';

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

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Texto' 
        style={styles.input} 
        onChangeText={onChangeText} 
        value={itemText} 
        />
        <Button title='agregar' onPress={addItem}/>
      </View>
      <View style={styles.itemContainer}>
        {items.map((item) => {
          return(
            <Text key={item.id} style={styles.item}>
              {item.value}
            </Text>
          )
        })}
      </View>
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
    marginTop: 30,
  },
  item: {
    padding: 10,
    margin: 10,
    textAlign: 'center',
    color: 'steelblue',
    borderRadius: 20,
    backgroundColor: 'powderblue',
  },
});
