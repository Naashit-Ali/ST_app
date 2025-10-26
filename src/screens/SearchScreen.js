import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CustomTextInput from '../components/atoms/CustomTextInput'
import Images from '../assets/images'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const SearchScreen = () => {
  return (
     <ScreenBoiler
      // scrollEnabled
      mainContainerStyle={{
        flexGrow: 1,
        paddingBottom: moderateScale(120, 0.3)
      }}
      containerStyle={{
        // flexGrow : 1,
        // backgroundColor:'red'
      }}
    >

              <View style={{
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(20, 0.3)
      }}>
        <CustomText style={styles?.textOne}>Where Do You Need To Go?</CustomText>
        <CustomText style={styles?.textTwo}>
          You've saved 12.4 kg Co2 this month.
        </CustomText>

        <CustomTextInput
            label={'From'}
            placeholder='Commuter Lots'
            tintColor={colors?.primary}
            leftImage={Images?.locationWhite}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: colors?.gray,
            }}
            labelStyle={{
            }}
            containerStyle={{
              marginTop: moderateScale(10, 0.3),
              width: '100%',
              marginBottom: 0,

            }}
          />
        </View>
      </ScreenBoiler>
  )
}

const styles = StyleSheet.create({
      textOne: {
        fontSize: moderateScale(16, 0.3),
        color: colors?.black,
        fontFamily: fonts?.semiBold,
      },
      textTwo: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.gray,
        fontFamily: fonts?.regular,
      }
})

export default SearchScreen