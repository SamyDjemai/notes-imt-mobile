import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../Components/LoginScreen';

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="Connexion"
        >
            <Stack.Screen
                name="Connexion"
                component={LoginScreen}
                options={{ title: "Notes IMT", headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default RootStack
