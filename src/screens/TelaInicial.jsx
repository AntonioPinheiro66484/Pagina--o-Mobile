// Screen2.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
        <Button title="Proxima" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Anterior" onPress={() => navigation.navigate('MainPage')} />
        <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
}

export default Screen1;
