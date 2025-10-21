import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import NavigationService from '../../navigation/NavigationService'

const Header = () => {
  return (
    <View style={styles?.container}>
      <CustomText 
      onPress={() => {
        NavigationService?.goBack();
      }}
      style={styles?.text}>{`< Back`}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    text: {
        fontFamily : fonts?.regular,
        fontSize : moderateScale(16,0.3),
        color : colors?.black,
    }
})

export default Header