import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import { moderateScale } from 'react-native-size-matters'
import CustomTextInput from '../components/atoms/CustomTextInput'
import CustomButton from '../components/atoms/CustomButton'
import HaveAccount from '../components/molecules/HaveAccount'

const LoginScreen = () => {
  return (
    <ScreenBoiler>
      <View style={styles?.container}>
        <CustomText style={styles.heading}>
          Welcome Back
        </CustomText>
        <CustomTextInput placeholder="Email Address/Phone Number" />
        <CustomTextInput
        secureText
        placeholder="Password" />
        <CustomButton
          title={'Sign In'}
          onPress={() => {
            // NavigationService?.navigate('');
          }}
        />
      </View>
      <HaveAccount />
    </ScreenBoiler>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: colors?.black,
    fontSize: moderateScale(24, 0.3),
    fontFamily: fonts?.bold,
    marginBottom: moderateScale(24, 0.3),
    marginTop: moderateScale(16, 0.3),
  },
})

export default LoginScreen