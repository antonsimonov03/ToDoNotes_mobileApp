import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    overflow: "hidden"
  },
  line: {
    fontSize: 20,
    marginRight: 15
  },
  icon: {
    width: 55,
    height: 55,
    backgroundColor: "#4d4d4d",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15
  },
  iconText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  itemName: {
    maxWidth: 200,
    fontSize: 22
  }
});
