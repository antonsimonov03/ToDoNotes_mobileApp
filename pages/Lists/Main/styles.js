import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header__icon: {
    position: "absolute",
    left: 20,
    color: "#fff",
    fontSize: 25
  },
  view: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  createListBtn: {},
  createListBlock: {
    paddingLeft: 20,
    paddingTop: 25
  },
  createListView: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgb(107, 107, 107)",
    width: 58,
    height: 58,
    borderRadius: 29,
    paddingTop: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6
  },
  button__icon: {
    fontSize: 25,
    color: "#fff",
    margin: 0
  },
  createListText: {
    fontSize: 16
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 150,
    padding: 10
  },
  modalBtn: {
    width: 90,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    backgroundColor: "rgb(207, 207, 207)"
  },
  lists: {
    height: 300,
    padding: 20,
    marginBottom: 10
  }
});
