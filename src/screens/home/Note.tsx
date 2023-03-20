import React from "react";
import {StyleSheet, Text, View} from "react-native";
import sizes from "../../theme/sizes";
import colors from "../../theme/colors";
import {Entypo} from "@expo/vector-icons";

const Note = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteIconBox}>
        <Entypo name="thunder-cloud" size={24} color="black"/>
        <Text style={styles.note}>Processing time - 1 Hour</Text>
      </View>
      <Text style={[styles.note, {color: colors.gray.secondary}]}>
        *Normal working hours & holidays apply.
      </Text>
    </View>);
};

export default Note;
const styles = StyleSheet.create({
  container: {padding: sizes.spacing.md, marginVertical: sizes.spacing.xl},
  noteIconBox: {flexDirection: "row", justifyContent: "center", alignItems: "center", gap: sizes.spacing.md},
  note: {
    fontSize: sizes.text.md,
    fontWeight: "500", textAlign: "center"
  }
});
