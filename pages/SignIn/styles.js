import { StyleSheet } from "react-native";

let buttonStyles = {
  width: 230,
  borderRadius: 30,
  padding: 10,
  paddingTop: 15,
  paddingBottom: 15,
  marginTop: 40,
  marginRight: "auto",
  marginBottom: 10,
  marginLeft: "auto"
};

let buttonText = {
  textAlign: "center",
  letterSpacing: 1,
  fontSize: 22
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20
  },
  signInBtn: {
    backgroundColor: "#dedede",
    ...buttonStyles
  },
  signInBtnText: buttonText,
  backBtn: {
    borderWidth: 1,
    borderColor: "#000",
    ...buttonStyles
  },
  backBtnText: buttonText
});
