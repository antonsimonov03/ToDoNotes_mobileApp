import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-fa-icons";
import _ from "lodash";

import Header from "../../../components/Header";
import TextField from "../../../components/TextField";
import Advertising from "../../../components/Advertising";
import ListItem from "./ListItem";

import styles from "./styles";

let LISTS = [
  {
    name: "home",
    objects: [
      { name: "qqqqqqqqqqqqqqqqqqqqqqqqqq" },
      { name: "2" },
      { name: "3" }
    ]
  },
  {
    name: "weekend",
    objects: [{ name: "1" }, { name: "2" }, { name: "3" }]
  },
  {
    name: "birthday",
    objects: [{ name: "1" }, { name: "2" }, { name: "3" }]
  },
  {
    name: "friday",
    objects: [{ name: "1" }, { name: "2" }, { name: "3" }]
  }
];

class Main extends Component {
  state = {
    isOpen: false,
    lists: LISTS
  };

  onClickBackBtn = () => {
    let { navigation } = this.props;
  };

  openDrawer = () => {
    let { navigation } = this.props;

    navigation.navigate("DrawerOpen");
  };

  onToggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  renderLists = () => {
    return _.map(this.state.lists, list => (
      <ListItem openList={this.onOpenList} data={list} />
    ));
  };

  onOpenList = list => {
    let { navigation: { push } } = this.props;

    push("List", list);
  };

  addList = e => {
    const { name, lists } = this.state;

    if (!name) return;

    this.setState({
      lists: [{ name, objects: [] }].concat(lists)
    });
  };

  render() {
    let { isOpen, name } = this.state;

    return (
      <View style={styles.container}>
        <Modal isVisible={isOpen} onBackdropPress={this.onToggleModal}>
          <View style={styles.modal}>
            <TextField
              value={name}
              label="List Name"
              onChange={name => this.setState({ name })}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.modalBtn}
              onPress={this.addList}
            >
              <Text>Create</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Header>
          <Icon
            onPress={this.openDrawer}
            style={styles.header__icon}
            name="list-ul"
          />
        </Header>
        <View style={styles.view}>
          <View style={styles.createListBlock}>
            <TouchableHighlight
              underlayColor="#fff"
              activeOpacity={0.8}
              style={styles.createListBtn}
              onPress={this.onToggleModal}
            >
              <View style={styles.createListView}>
                <View style={styles.button}>
                  <Icon style={styles.button__icon} name="plus" />
                </View>
                <Text style={styles.createListText}>Create List</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <ScrollView style={styles.lists}>{this.renderLists()}</ScrollView>
            <Advertising />
          </View>
        </View>
      </View>
    );
  }
}

export default Main;
