import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25
  },
  inputWrapper: {
    width: "80%",
    flexWrap: "nowrap",
    justifyContent: "center"
  },
  searchInput: {
    height: 60,
    borderWidth: 1,
    fontSize: 20,
    borderColor: "black",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 40
  },
  searchInputIcon: {
    color: "#d6d6d6",
    fontSize: 35,
    position: "absolute",
    right: 10
  },
  voiceBtn: {
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(107, 107, 107)",
    borderRadius: 50,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4
    },
    shadowOpacity: 0.42,
    shadowRadius: 5.46,
    elevation: 6
  },
  voiceIcon: {
    fontSize: 32,
    color: "#fff"
  }
});
