import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { colors } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.cerulian,
    width: "90%",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    backgroundColor: colors.black,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
