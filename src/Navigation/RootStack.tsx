import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import LoginScreen from '../Components/LoginScreen';
import NotesScreen from '../Components/NotesScreen';
import { Button, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Notes IMT", headerShown: false }}
      />
      <Stack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={{
          title: "Notes",
          headerBackTitle: "Déconnexion",
          headerBackImage: () => <Feather name="log-out" size={24} color="black" />,
          headerRight: () =>
            <TouchableOpacity style={styles.headerInfoButton} onPress={() => Linking.openURL("https://github.com/SamyDjemai/notes-imt-mobile")}>
              <Feather name="info" size={24} color="black" />
            </TouchableOpacity>,
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerInfoButton: {
    marginRight: 12
  }
})

export default RootStack
