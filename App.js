import React, { Component } from "react";
import {View, StyleSheet, Text, TextInput, Button, Platform, ScrollView } from "react-native";
import {DrawerNavigator} from 'react-navigation';

import firstScreen from './screens/firstScreen';
import secondScreen from './screens/secondScreen';

const drawerExample = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: firstScreen,
    },
    Second: {
      path: '/sent',
      screen: secondScreen,
    }
  },
  {
    initialRoutName: "First",
    drawerPosition:'left'
  }
);

export default drawerExample;

