import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import NotesRow from './NotesRow';

type Props = { notes: any, navigation: any, route: any }
type State = {}

class NotesScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const notes = this.props.route.params.notes
        const name = notes.list1.list1_Details_Group_Collection.list1_Details_Group[0]["@attributes"].textbox10.trim()

        this.props.navigation.setOptions({ title: name })
    }

    render() {
        const notes = this.props.route.params.notes

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.notesList}
                    data={notes.list1.list1_Details_Group_Collection.list1_Details_Group[0].table2.Detail_Collection.Detail}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <NotesRow
                            title={item["@attributes"].textbox40.trim()}
                            subject={item["@attributes"].textbox38.trim()}
                            note={item["@attributes"].textbox52}
                            coeff={Number(item["@attributes"].textbox46)}
                            ects={Number(item["@attributes"].textbox22)}
                        />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    notesList: {
        flex: 1
    }
})

export default NotesScreen
