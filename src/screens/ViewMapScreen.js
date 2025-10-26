import { View, Text, StyleSheet } from 'react-native'
import React, { lazy } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { moderateScale } from 'react-native-size-matters'
import DriverCard from '../components/organisms/DriverCard'
import { colors } from '../theme/colors'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import CustomImage from '../components/atoms/CustomImage'
import Images from '../assets/images'
import { HeaderShownContext } from '@react-navigation/elements'

const ViewMapScreen = () => {

    const Tab = ({image , label , value, tintColor, textStyles}) => {
        return(
            <View style={{
                flexDirection : 'row',
                alignItems : 'center',
                gap : moderateScale(8,0.3),
                justifyContent : 'space-between',  
                marginTop : moderateScale(8,0.3), 
            }}>

                <View style={{
                    flexDirection : 'row',
                    alignItems : 'center',
                    gap : moderateScale(8,0.3),
                }}>
                    <CustomImage
                    tintColor={tintColor}
                    source={image}
                    style={{
                        width : moderateScale(24, 0.3),
                        height : moderateScale(24,0.3)
                    }}
                    />
                    <CustomText style={{
                        fontSize : moderateScale(16, 0.3),
                        color : colors?.gray,
                        fontFamily : fonts?.medium
                    }}>{label}</CustomText>


                </View>
 <CustomText style={[{
                        fontSize : moderateScale(14, 0.3),
                        color : colors?.gray,
                        fontFamily : fonts?.regular
                    }, textStyles]}>{value}</CustomText>

            </View>
        )
    }

  return (
         <ScreenBoiler
            mainContainerStyle={{
                flexGrow: 1,
                paddingBottom: moderateScale(120, 0.3),
                // backgroundColor : 'red'
            }}
             containerStyle={{
      }}
        >
{/* 
            <View style={{
                marginTop : moderateScale(20,0.3),
                width : '40%',
                alignItems : 'center',
                justifyContent : 'center',
            }}> */}

                <CustomImage
                source={Images?.logo}
                style={{
                    width : moderateScale(100, 0.3),
                    height : moderateScale(100, 0.3),
                    borderRadius : moderateScale(200, 0.3),
                    alignSelf : 'center',
                    marginBottom : moderateScale(20,0.3),

                }}
                
                />


            {/* </View> */}

            <DriverCard/>

                 <View style={{
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(20, 0.3),
      }}>
        <CustomText style={styles?.textOne}>Route Comparison</CustomText>
       

        <CustomImage
          source={Images?.map}
          style={{
            width: '100%',
            height: moderateScale(200, 0.3),
            borderRadius: moderateScale(12, 0.3),
            marginTop: moderateScale(10, 0.3),
          }}
          resizeMode='cover'
        />

        <Tab image={Images?.savingIcon} label={'Your Route'} 
        value={'Oxford To Paul'}
        />

        <Tab image={Images?.locationIcon} label={'Driver Route'} 
        value={'Oxford To Paul'}
        />
      </View>


       <View style={{
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(20, 0.3),
      }}>

        <CustomText style={styles?.textOne}>Trip Details</CustomText>

           <Tab image={Images?.savingIcon} label={'Departure'} 
        value={'9:00 AM'}
                tintColor={colors?.gray}
        />

        <Tab image={Images?.locationIcon} label={'Distance'} 
        value={'12.5 Mi'}
        tintColor={colors?.gray}
        />

        <Tab image={Images?.duration} label={'Duration'} 
        value={'12.5 Mi'}
        tintColor={colors?.gray}
        />

        <Tab image={Images?.saving} label={'Saving'} 
        value={'$10'}
        tintColor={colors?.gray}
        textStyles={{
            fontFamily : fonts?.bold,
            color : colors?.primary
        }}
        />
        <Tab image={Images?.seat} label={'Available Seats'} 
        value={'04'}
        tintColor={colors?.gray}
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
})

export default ViewMapScreen