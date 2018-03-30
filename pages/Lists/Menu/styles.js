import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#707070",
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 10
  },
  avatar: {
    width: 90,
    height: 90,
    marginBottom: 10
  },
  header_name: {
    fontSize: 18,
    marginBottom: 5,
    color: "#fff"
  },
  header_phone: {
    fontSize: 14,
    color: "#fff"
  },
  routes: {
    padding: 30,
    paddingTop: 20
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "rgb(199, 199, 199)",
    borderBottomWidth: 1
  },
  linkItemWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  linkItemIconWrapper: {
    width: 30,
    marginRight: 10
  },
  linkItemIcon: {
    textAlign: "center",
    fontSize: 20,
    color: "#adadad"
  },
  linkItemText: {
    fontSize: 20
  }
});
