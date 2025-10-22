import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../assets/images'
import CustomImage from '../components/atoms/CustomImage'
import { moderateScale } from 'react-native-size-matters'
import * as Animatable from 'react-native-animatable'
import { colors } from '../theme/colors'
import NavigationService from '../navigation/NavigationService'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.navigate('SignupScreen')
    }, 3000) // Navigate after 3 seconds (animation + delay)

    return () => clearTimeout(timer)
  }, [])

  return (
<View style={styles.container}>
      <Animatable.View
        animation="slideInRight"
        duration={1500}
        delay={500}
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        }}
        easing="ease-out"
      >
        <CustomImage source={Images.logo} style={styles.logo} resizeMode="contain" />
      </Animatable.View>
      <CustomText style={styles?.footerText}>Slug Tag</CustomText>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  logo: {
    width: moderateScale(200,0.3),
    height: moderateScale(200,0.3),
  },
  footerText: {
    fontFamily : fonts?.bold,
    fontSize : moderateScale(18,0.3),
    color : colors?.black, 
    opacity: 0.7,
  },
})

export default SplashScreen