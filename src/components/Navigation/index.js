import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Button } from "@react-native-material/core";

export default function MainNav({ nav }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => nav.navigate('Home')}>
        <Text style={styles.txt}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => nav.navigate('Juegos')}>
        <Text style={styles.txt}>JUEGOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => nav.navigate('Login')}>
        <Text style={styles.txt}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#656565',
    height: 100,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  btn: {
    height: 100,
    backgroundColor: '#343434',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    color: '#f4f4f4'
  }
});
