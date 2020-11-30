import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, ActivityIndicator, Keyboard, Alert } from "react-native";
import { notes } from '../Helpers/notesData';

type MyProps = { navigation: any }
type MyState = { username: string, password: string, isLoading: boolean }

class LoginScreen extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLoading: false
        }
        this._loadNotes = this._loadNotes.bind(this)
    }

    showError = () => {
        this.setState({ isLoading: false })
        Alert.alert("Oups !", "Il y a eu une erreur. Vérifiez votre connexion Internet et vos identifiants.")
    }

    _logIn = () => {
        if (!this.state.isLoading && this.state.username && this.state.password) {
            Keyboard.dismiss()
            this._loadNotes()
        }
    }

    _loadNotes() {
        this.setState({ isLoading: true }, () => {
            var body = new FormData()
            body.append("username", this.state.username)
            body.append("password", this.state.password)

            /*
            fetch('https://notes-imt.djemai.net/sifiQuery.php', {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                body: body
            })
                .then((response) => {
                    if (response.ok) {
                        response.json().then((data) => {
                            this.setState({ isLoading: false })
                            this.props.navigation.navigate("NotesScreen", { notes: data })
                        })
                    } else {
                        this.showError()
                    }
                })
                .catch((error) => { console.error(error); this.showError() });
            */

            this.setState({ isLoading: false })
            this.props.navigation.navigate("NotesScreen", { notes: notes })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../Images/logo.png")} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Identifiant IMT"
                    textContentType="username"
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ username: text })}
                    onSubmitEditing={this._logIn}
                    editable={!this.state.isLoading}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mot de passe IMT"
                    textContentType="password"
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                    onSubmitEditing={this._logIn}
                    editable={!this.state.isLoading}
                />
                <TouchableOpacity style={styles.loginButton} onPress={this._logIn}>
                    {this.state.isLoading
                        ? <View>
                            <ActivityIndicator color="white" />
                            <Text style={styles.loading_text}>Chargement de vos notes...</Text>
                        </View>
                        : <Text style={styles.loginText}>Se connecter</Text>
                    }
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
        backgroundColor: "blue",
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    loading_text: {
        color: "white"
    },
})

export default LoginScreen
