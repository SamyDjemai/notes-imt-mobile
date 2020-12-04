import React from 'react'
import { View, StyleSheet, FlatList, Text, Alert } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { areCredentialsAvailable, deleteCredentials } from "../Store/CredentialsManager";
import NotesRow from './NotesRow';

type Props = { notes: any, navigation: any, route: any }
type State = {}

class NotesScreen extends React.Component<Props, State> {
  Tab: any

  constructor(props: any) {
    super(props);
    this.Tab = createMaterialTopTabNavigator()
    this.props.navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault()
      Alert.alert(
        "Déconnexion",
        "Voulez-vous vous déconnecter ? L'application oubliera vos identifiants.",
        [
          { text: "Non", style: "cancel", onPress: () => { } },
          {
            text: "Oui", style: "destructive", onPress: () => areCredentialsAvailable().then((available) => {
              if (available) {
                deleteCredentials().then(() => this.props.navigation.dispatch(e.data.action))
              }
            })
          }
        ])
    })
  }

  componentDidMount() {
    const notes = this.props.route.params.notes
    const name = notes.list1.list1_Details_Group_Collection.list1_Details_Group[0]["@attributes"].textbox10.trim()

    this.props.navigation.setOptions({ title: name })
  }

  showSingleYear = (props: any) => {
    const yearData = props.yearData
    const moyenne = yearData.table2["@attributes"].textbox33
    const rank = yearData["@attributes"].textbox19.split(":")[1].trim()

    return (
      <View style={styles.container}>
        <View style={styles.rankView}>
          <Text style={styles.rank}>Moyenne : </Text>
          <Text style={styles.rankText}>{moyenne} </Text>
          <Text style={styles.rank}>({rank})</Text>
        </View>
        <FlatList
          style={styles.notesList}
          data={yearData.table2.Detail_Collection.Detail}
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

  render() {
    const notes = this.props.route.params.notes
    const Tab = this.Tab

    return (
      <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 16 } }}>
        {notes.list1.list1_Details_Group_Collection.list1_Details_Group.map((year: any, index: number) => (
          <Tab.Screen
            key={index}
            name={year["@attributes"].X_AnnSco.trim()}
            children={() => <this.showSingleYear yearData={year} />} />
        ))}
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notesList: {
    flex: 1
  },
  rankView: {
    backgroundColor: "white",
    borderColor: "lightgray",
    borderBottomWidth: 1,
    // borderRadius: 30,
    padding: 10,
    // margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "auto"
  },
  rankText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rank: {
    fontSize: 20,
  }
})

export default NotesScreen
