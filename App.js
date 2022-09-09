import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {

const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [items, setItems] = useState([
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'}
]);

const [openAnother, setOpenAnother] = useState(false);
const [anotherValue, setAnotherValue] = useState(null);
const [anotherItems, setAnotherItems] = useState([
  {label: 'First', value: 1},
  {label: 'Second', value: 2},
  {label: 'Third', value: 3}
]);

//  functions to closing other dropdown lists when one is opened

const onOpen = useCallback(() =>{
  setOpenAnother(false);
}, []);

const onAnotherOpen = useCallback(() => {
  setOpen(false);
}, []);

 
  return (
      <View style={styles.container}>
        <View style={{zIndex:10}}>
          <DropDownPicker
          // open kohta määrää onko dropdownpicker auki vai kiinni
          // value: mikä arvo dropdownpickerissä on valittu
          // items: listaa arvot
          // setOpen: vaihtaa arvon open-muuttujalle ??
          // setValue: vaihtaa arvon value muuttujalle ??
            open={open}
            onOpen={onOpen}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <View style={{zIndex:9}}>
          <DropDownPicker
          open={openAnother}
          onOpen={onAnotherOpen}
          value={anotherValue}
          items={anotherItems}
          setOpen={setOpenAnother}
          setValue={setAnotherValue}
          setItems={setAnotherItems}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
