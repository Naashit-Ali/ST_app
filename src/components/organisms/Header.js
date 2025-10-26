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

const Header = ({ type = 2, headerTitle = ''}) => {
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
        <View style={{}}>
                 <Icon
          name='bell-outline'
          family='MaterialDesignIcons'
          size={moderateScale(25, 0.3)}
          color={colors?.white}
          containerStyle={styles?.iconStyles}
        />
        <View style={styles?.notificationBadge}>
        <CustomText style={styles?.text3}>2</CustomText></View>
        </View>
      </View>
    }

    {type == 3 &&
    <View style={styles?.container3}>
      <Icon
      name='keyboard-arrow-left'
      family='MaterialIcons'
      size={moderateScale(20, 0.3)}
      color={colors?.black}
      onPress={() => {
        NavigationService?.goBack();
      }}
      containerStyle={{
        backgroundColor : colors?.white,
        padding : moderateScale(6, 0.3),
        borderRadius : moderateScale(50,0.3)
      }}
      />
      <CustomText style={{
        fontFamily : fonts?.semiBold,
        fontSize : moderateScale(16,0.3),
        color : colors?.black
      }}>{headerTitle}</CustomText>
      </View>}
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
  },
  container3  :{
    flexDirection : 'row',
    alignItems : 'center',
    gap : moderateScale(10,0.3),
    width : '100%',
  },
   text3: {
    color: colors?.white,
    fontSize: moderateScale(12, 0.3),
    fontFamily: fonts?.bold,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors?.orange,
    borderRadius: moderateScale(50, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(6, 0.3),
    paddingVertical: moderateScale(-1, 0.3),
    zIndex: 1
  },
})

export default Header;