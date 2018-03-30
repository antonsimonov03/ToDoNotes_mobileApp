import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },
  logInBtn: {
    width: 230,
    backgroundColor: "#dedede",
    borderRadius: 30,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    marginRight: "auto",
    marginBottom: 10,
    marginLeft: "auto"
  },
  logInBtnText: {
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 22
  },
  signInBtn: {
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 50
  },
  signInBtnText: {
    color: "#e68ce6",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 1
  },
  logInHeader: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  },
  socialView: {
    height: 50,
    flexWrap: "wrap",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 0,
    marginBottom: 0
  },
  socialIcons: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#e68ce6",
    borderRadius: 50,
    marginLeft: 5,
    marginRight: 5
  },
  socialIcon: {
    color: "#fff",
    fontSize: 20
  }
});
