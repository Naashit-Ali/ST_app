import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MyRidesScreen from '../screens/MyRidesScreen';
import MessageListingScreen from '../screens/MessageListingScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import {moderateScale} from 'react-native-size-matters';
import { colors } from '../theme/colors';
import CustomText from '../components/atoms/CustomText';
import Images from '../assets/images';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  const tabScreens = [

    {
      name: 'HomeScreen',
      component: HomeScreen,
      iconFocused: Images.homeFocused,
      iconUnfocused: Images.homeUnfocused,
      // label: 'Home'
    },
    {
      name: 'MyRidesScreen',
      component: MyRidesScreen,
      iconFocused: Images.myRideFocused,
      iconUnfocused: Images.myRideUnfocused,
      // label: 'My Rides'
    },
    {
      name: 'MessageListingScreen',
      component: MessageListingScreen,
      iconFocused: Images.messageFocused,
      iconUnfocused: Images.messageUnfocused,
      // label: 'Messages'
    },
       {
      name: 'MyProfileScreen',
      component: MyProfileScreen,
      iconFocused: Images.profileFocused,
      iconUnfocused: Images.profileUnfocused,
      // label: 'Profile'
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          overflow: 'hidden',
          height: moderateScale(55, 0.3),
        },
      }}>
      {tabScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={[
                  styles.iconWrapper,
                  focused && styles.focusedIconWrapper,
                ]}>
                <Image
                  source={focused ? screen.iconFocused : screen.iconUnfocused}
                  style={styles?.imageStyle}
                  resizeMode="contain"
                />
                {/* <CustomText style={[styles.label,]}>{screen.label}</CustomText> */}
              </View>
            ),
            unmountOnBlur: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(8, 0.3),
  },
  focusedIconWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  imageStyle: {
    width: moderateScale(27, 0.6),
    height: moderateScale(27, 0.6),
  },
  label: {
    fontSize: moderateScale(12, 0.3),
    color: colors?.black,
    marginTop: moderateScale(2, 0.3)
  }
});

export default BottomNavigation;
