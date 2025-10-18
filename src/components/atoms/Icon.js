// import { Icon as NativeBaseIcon } from 'native-base';
// import React from 'react';
// import { TouchableOpacity, useWindowDimensions } from 'react-native';

// import { moderateScale } from 'react-native-size-matters';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// // import Entypo from 'react-native-vector-icons/Entypo';
// // import EvilIcons from 'react-native-vector-icons/EvilIcons';
// // import Feather from 'react-native-vector-icons/Feather';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import Fontisto from 'react-native-vector-icons/Fontisto';
// // import Foundation from 'react-native-vector-icons/Foundation';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// // import Octicons from 'react-native-vector-icons/Octicons';

// const Icon = ({
//   name,
//   as,
//   size,
//   color,
//   style,
//   onPress,
//   disabled = false,
//   iconContainerStyle,
//   ...props
// }) => {
//   const {width, height} = useWindowDimensions();
//   const iconFamilies = {
//     AntDesign: AntDesign,
//     Entypo: Entypo,
//     EvilIcons: EvilIcons,
//     Feather: Feather,
//     FontAwesome: FontAwesome,
//     FontAwesome5: FontAwesome5,
//     FontAwesome6: FontAwesome6,
//     Fontisto: Fontisto,
//     Foundation: Foundation,
//     Ionicons: Ionicons,
//     MaterialCommunityIcons: MaterialCommunityIcons,
//     MaterialIcons: MaterialIcons,
//     Octicons: Octicons,
//     SimpleLineIcons: SimpleLineIcons,
//     Zocial: Zocial,
//   };
//   return (
//     <TouchableOpacity
//       style={[
//         iconContainerStyle,
//         disabled &&
//           {
//             // backgroundColor: Color?.SeparatorColor,
//           },
//       ]}
//       disabled={disabled}
//       onPress={onPress}
//       activeOpacity={0}
//       hitSlop={{
//         top: moderateScale(10, 0.6),
//         bottom: moderateScale(10, 0.6),
//         left: moderateScale(10, 0.6),
//         right: moderateScale(10, 0.6),
//       }}
//       {...props}>
//       <NativeBaseIcon
//         name={name}
//         as={iconFamilies[as]}
//         size={size}
//         color={color}
//         style={style}
//       />
//     </TouchableOpacity>
//   );
// };

// export default Icon;
