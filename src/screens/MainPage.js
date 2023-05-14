// MainPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pagina Principal</Text>
      <Button title="Tela1" onPress={() => navigation.navigate('Screen1')} />
      <Button title="Tela2" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Tela3" onPress={() => navigation.navigate('Screen3')} />
      <Button title="Tela4" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Tela5" onPress={() => navigation.navigate('Screen5')} />
      <Button title="Tela6" onPress={() => navigation.navigate('Screen6')} />
      <Button title="Tela7" onPress={() => navigation.navigate('Screen7')} />
    </View>
  );
}

export default MainPage;
