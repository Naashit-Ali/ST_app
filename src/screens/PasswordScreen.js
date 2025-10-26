import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import { fonts } from '../theme/font'
import CustomTextInput from '../components/atoms/CustomTextInput'
import CustomButton from '../components/atoms/CustomButton'
import NavigationService from '../navigation/NavigationService'

const PasswordScreen = () => {
  return (
    <ScreenBoiler type={1}>
  <CustomText style={styles.heading}>
    Set a password
        </CustomText>
        <CustomText style={styles?.subTitle}>Set a strong password for your account</CustomText>
        <CustomTextInput
        secureText
        placeholder="Password" />
        <CustomTextInput 
secureText
        placeholder="Confirm Password" />
        <CustomButton
          title={'Confirm'}
          onPress={() => {
            NavigationService?.navigate('SetupProfileScreen');
          }}
        />
    </ScreenBoiler>
  )
}

const styles = StyleSheet.create({
    heading: {
        color: colors?.black,
        fontSize: moderateScale(24, 0.3),
        fontFamily: fonts?.bold,
        marginBottom: moderateScale(6, 0.3),
        marginTop: moderateScale(16, 0.3),
      },
      subTitle : {
        color: colors?.gray,
        fontSize: moderateScale(14, 0.3),
        fontFamily: fonts?.regular,
        marginBottom: moderateScale(24, 0.3),
        marginTop: moderateScale(0, 0.3),
      }
})

export default PasswordScreen