import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './app/screens/HomeScreen'
import { Contacts } from './app/screens/ContactsScreen'
import { Product } from './app/screens/Product'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home} />
        <Stack.Screen name='ContactsNav' component={Contacts} />
        <Stack.Screen name='ProductNav' component={Product}/>


      </Stack.Navigator>

    </NavigationContainer>
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
