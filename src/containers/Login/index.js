import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Button } from "@react-native-material/core";

import MainNav from '../../components/Navigation';

export default function Login({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.div1}>
          <Text>LOGIN</Text>
        </View>
        <View style={styles.footer}>
          <MainNav nav={navigation} />
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  div1: {
    backgroundColor: '#656565',
    flex: 1,
    width: '100%'
  },
  footer: {
    width: '100%'
  }
});
