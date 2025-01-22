import { StyleSheet, View } from "react-native";
import { colors } from "./theme";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Eggs" />
      <ShoppingListItem name="Milk" isCompleted/>
      <ShoppingListItem name="Bread" isCompleted/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",

  },
});
