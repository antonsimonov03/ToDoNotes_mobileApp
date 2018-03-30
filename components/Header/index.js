import React, { Component } from "react";
import { View } from "react-native";

import styles from "./styles";

const Header = props => <View style={styles.header}>{props.children}</View>;

export default Header;
