import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DemoScreen from '../screens/DemoScreen';
import SplashScreen from '../screens/SplashScreen';
import NavigationService from './NavigationService';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import OtpScreen from '../screens/OtpScreen';
import SetupProfileScreen from '../screens/SetupProfileScreen';
import BottomNavigation from './BottomNavigation';
import AvailableRidesScreen from '../screens/AvailableRidesScreen';
import ViewMapScreen from '../screens/ViewMapScreen';
import DriverProfileScreen from '../screens/DriverProfileScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  const screens = {
    DemoScreen,
    SplashScreen,
    SignupScreen,
    LoginScreen,
    PasswordScreen,
    OtpScreen,
    SetupProfileScreen,
    BottomNavigation,
    AvailableRidesScreen,
    ViewMapScreen,
    DriverProfileScreen,
    SearchScreen,
    
  }
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
         {Object.entries(screens).map(([name, component]) => (
          <Stack.Screen name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

