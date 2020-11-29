import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../Components/LoginScreen';
import NotesScreen from '../Components/NotesScreen';

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
                options={{ title: "Notes" }}
            />
        </Stack.Navigator>
    )
}

export default RootStack
