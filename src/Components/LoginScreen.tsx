import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, Linking } from "react-native";

class LoginScreen extends React.Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../Images/logo.png")} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Identifiant IMT"
                    textContentType="username"
                    onChangeText={text => this.setState({ username: text })} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mot de passe IMT"
                    textContentType="password"
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })} />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.bottomText}>Vos identifiants seront sauvegardés sur votre appareil pour vous connecter automatiquement au prochain lancement.</Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://github.com/SamyDjemai/notes-imt-mobile")}>
                    <Text style={styles.repoText}>Code source</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: "80%",
        height: 200
    },
    inputText: {
        width: "80%",
        fontSize: 16,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        margin: 10
    },
    loginButton: {
        width: "80%",
        alignItems: "center",
        backgroundColor: "green",
        padding: 12,
        borderRadius: 20,
        fontSize: 20,
        marginTop: 20
    },
    loginText: {
        fontSize: 16,
        color: "white"
    },
    bottomText: {
        width: "80%",
        color: "gray",
        textAlign: "center",
        marginTop: 20
    },
    repoText: {
        width: "80%",
        color: "blue",
        textAlign: "center",
        marginTop: 10
    }
})

export default LoginScreen
