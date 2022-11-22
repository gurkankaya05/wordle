import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView,ScrollView, } from "react-native";
import { colors } from "./src/constants";
import Keyboard from "./src/components/Keyboard/Keyboard";
import { useState } from "react";

export default function App() {
  const NUMBER_OF_TRIES = 6;

  const word = "hello";
  const letters = word.split("");

  const rows = new Array(NUMBER_OF_TRIES).fill(
    new Array(letters.length).fill("a")
  );


    const onKeyPressed =(key) =>{
      console.warn(key)

    }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WORDLE</Text>
      <StatusBar style="light" />
      <View style={styles.map}>
        {rows.map((row) => (
          <View style={styles.row}>
            {row.map((cell) => (
              <View style={styles.cell}>
              <Text style={styles.cellText}>{cell.toUpperCase()}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <Keyboard onKeyPressed={onKeyPressed} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 7,
  },
  map: {
    alignSelf: "stretch",
    height: 100,
    marginVertical:20
  },
  row: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  cell: {
    width: 30,
    height: 30,
    borderColor: colors.darkgrey,
    borderWidth: 3,
    flex: 1,
    aspectRatio: 1,
    margin: 3,
    maxWidth: 70,
    justifyContent:'center',
    alignItems:'center'
  },
  cellText:{
    color:colors.lightgrey,
    fontWeight:'bold',
    fontSize:28
  }
});
