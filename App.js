import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SeletionPage from "./pages/Auth/SelectionPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SeletionPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%'
  }
});
