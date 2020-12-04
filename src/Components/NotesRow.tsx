import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type NotesRowType = {
  title: string,
  subject: string,
  note: number,
  coeff: number,
  ects: number
}

const NotesRow = (info: NotesRowType) => (
  <View style={info.coeff || info.ects ? styles.row_container : [styles.row_container, styles.row_container_header]}>
    <View style={styles.title_container}>
      <Text style={info.coeff || info.ects ? styles.title : [styles.title, styles.title_header]}>{info.title}</Text>
      {info.coeff != 0 &&
        <Text style={styles.subject}>{info.subject}</Text>
      }

    </View>
    <View style={styles.grade_container}>
      <Text style={info.coeff || info.ects ? styles.note : styles.note_header}>{info.note}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row_container: {
    maxHeight: 200,
    padding: 5,
    marginHorizontal: 5,
    flexDirection: "row",
  },
  row_container_header: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    alignItems: "flex-end"
  },
  title_container: {
    flex: 1,
    flexDirection: "column",
    textAlign: "left"
  },
  grade_container: {
    marginLeft: 16,
    flexDirection: "column",
    alignItems: "flex-end"
  },
  title: {
    fontSize: 16
  },
  title_header: {
    fontWeight: "bold",
    fontSize: 24
  },
  subject: {
    fontFamily: "monospace"
  },
  note: {
    fontSize: 22
  },
  note_header: {
    fontSize: 24,
    fontWeight: "bold"
  },
  coeff: {
    textAlign: "right"
  }
})

export default NotesRow
