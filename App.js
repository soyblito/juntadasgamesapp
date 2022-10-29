import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "@react-native-material/core";

import HomeScreen from './src/containers/Home';
import JuegosScreen from './src/containers/Juegos';
import LoginScreen from './src/containers/Login';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'JuntadasGamesApp',
            headerStyle: {
              backgroundColor: '#656565',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Juegos" component={JuegosScreen}
          options={{
            title: 'Listado de Juegos',
            headerStyle: {
              backgroundColor: '#656565',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#656565',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
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
