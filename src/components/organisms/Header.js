import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import NavigationService from '../../navigation/NavigationService'
import Icon from '../atoms/Icon'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'

const Header = ({ type = 2 }) => {
  return (<>
    {type == 1 &&
      <View style={styles?.container}>
        <Icon
          name='arrow-back-ios'
          family='MaterialIcons'
          size={moderateScale(14, 0.3)}
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
    }

    {type == 2 &&
      <View style={styles?.container2}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: moderateScale(10, 0.3)
        }}>
          <CustomImage
            source={Images?.logo}
            style={styles?.logoImg}
            resizeMode='contain'
          />
          <CustomText style={styles?.logoText}>Slug Tag</CustomText>
        </View>
        <Icon
          name='bell-outline'
          family='MaterialDesignIcons'
          size={moderateScale(25, 0.3)}
          color={colors?.white}
          containerStyle={styles?.iconStyles}
        />
      </View>
    }
  </>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts?.regular,
    fontSize: moderateScale(16, 0.3),
    color: colors?.black,
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: moderateScale(60, 0.3),
    height: moderateScale(35, 0.3),
  },
  logoText: {
    fontFamily: fonts?.bold,
    fontSize: moderateScale(18, 0.3),
    color: colors?.themeBlackV2,
  },
  iconStyles:{
    padding: moderateScale(10, 0.3),
    borderRadius: moderateScale(50, 0.3),
    backgroundColor: colors?.primary,
  }
})

export default Header;