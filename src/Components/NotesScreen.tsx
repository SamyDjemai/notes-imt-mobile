import React from 'react'
import { View, StyleSheet, Text, ScrollView } from "react-native";

type Props = { notes: any, navigation: any, route: any }
type State = {}

class NotesScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const notes = this.props.route.params.notes
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>{JSON.stringify(notes)}</Text>
                </ScrollView>
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

export default NotesScreen
