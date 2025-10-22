import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Import from new modular packages
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { Entypo } from '@react-native-vector-icons/entypo';
// import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import { Feather } from '@react-native-vector-icons/feather';
// import { FontAwesome } from '@react-native-vector-icons/font-awesome';
// import { FontAwesome5 } from '@react-native-vector-icons/font-awesome5';
// import { FontAwesome6 } from '@react-native-vector-icons/font-awesome6';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons';
// import { Octicons } from '@react-native-vector-icons/octicons';
// import { SimpleLineIcons } from '@react-native-vector-icons/simple-line-icons';
// import { Fontisto } from '@react-native-vector-icons/fontisto';
// import { Foundation } from '@react-native-vector-icons/foundation';
// import { Zocial } from '@react-native-vector-icons/zocial';

const ICON_FAMILIES = {
  AntDesign,
//   Entypo,
//   EvilIcons,
//   Feather,
//   FontAwesome,
//   FontAwesome5,
//   FontAwesome6,
//   Ionicons,
  MaterialIcons,
  MaterialDesignIcons,
//   Octicons,
//   SimpleLineIcons,
//   Fontisto,
//   Foundation,
//   Zocial,
};

const Icon = ({
  family = 'AntDesign',
  name = 'home',
  size = 24,
  color = '#000',
  style,
  containerStyle,
    onPress,
}) => {
  const IconComponent = ICON_FAMILIES[family];

  if (!IconComponent) {
    // console.warn(⚠️ Icon family "${family}" not found.);
    return null;
  }

  return (
    <TouchableOpacity
         onPress={onPress}
    style={[styles.container, containerStyle]}>
      <IconComponent
 
      name={name} size={size} color={color} style={style} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;