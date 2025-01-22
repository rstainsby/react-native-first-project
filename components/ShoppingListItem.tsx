import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { colors } from "../theme";
import { AntDesign } from '@expo/vector-icons';

interface ShoppingListItemProps {
  name: string;
  isCompleted?: boolean;
}

export const ShoppingListItem = ({
  name,
  isCompleted,
}: ShoppingListItemProps) => {
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      { text: "Yes", onPress: () => console.log("Yes") },
      { text: "No", onPress: () => console.log("No") },
    ]);
  };

  return (
    <View
      style={[styles.itemContainer, isCompleted && styles.completedContainer]}
    >
      <Text style={[styles.itemText, isCompleted && styles.completedText]}>{name}</Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.7}
      >
        <AntDesign name="closecircle" size={24} color={isCompleted ? colors.grey : colors.red} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.cerulian,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  completedContainer: {
    backgroundColor: colors.lightGrey,
    borderBottomColor: colors.lightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  completedText: {
    color: colors.grey,
    textDecorationLine: "line-through",
    textDecorationColor: colors.grey,
  },
});
