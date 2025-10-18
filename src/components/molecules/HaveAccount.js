import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import NavigationService from '../../navigation/NavigationService'

const HaveAccount = ({ containerStyle, isLogin = true }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText style={styles?.textOne}>
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
        <CustomText style={styles?.textTwo}
        onPress={() => {
            NavigationService?.navigate(isLogin ? 'SignupScreen' : 'LoginScreen');
        }}
        > 
            {isLogin ? ' Sign Up' : ' Sign In'}</CustomText>
      </CustomText>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    textOne:{
        fontFamily: fonts?.regular,
        fontSize: moderateScale(16,0.3),
        color: colors?.black,
        paddingBottom: moderateScale(10,0.3),
    },
    textTwo:{
        fontFamily: fonts?.medium,
        fontSize: moderateScale(16,0.3),
        color: colors?.primary,
    }
})

export default HaveAccount