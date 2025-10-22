import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import NavigationService from '../../navigation/NavigationService'
import Icon from '../atoms/Icon'

const Header = () => {
  return (
    <View style={styles?.container}>
      <Icon
      name='arrow-back-ios'
      family='MaterialIcons'
      size={moderateScale(14 ,0.3)}
      color={colors?.black}
         onPress={() => {
        NavigationService?.goBack();
      }}
      />
      <CustomText 
      onPress={() => {
        NavigationService?.goBack();
      }}
      style={styles?.text}>{`Back`}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection : 'row',
        alignItems : 'center',
        // gap : moderateScale(10,0.3),
    },
    text: {
        fontFamily : fonts?.regular,
        fontSize : moderateScale(16,0.3),
        color : colors?.black,
    },
})

export default Header