import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  header__text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  header__icon: {
    position: "absolute",
    left: 20,
    color: "#fff",
    fontSize: 25
  },
  body: {
    flex: 1,
    padding: 20
  },
  listItems: {},
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40
  },
  locationBtn: {
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(107, 107, 107)",
    borderRadius: 50,
    borderWidth: 0,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 4
    },
    shadowOpacity: 0.42,
    shadowRadius: 5.46,
    elevation: 6
  },
  locationText: {
    fontSize: 18
  },
  locationIcon: {
    fontSize: 32,
    color: "#fff"
  }
});
