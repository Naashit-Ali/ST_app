import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomTextInput from '../components/atoms/CustomTextInput'
import { moderateScale } from 'react-native-size-matters'
import Images from '../assets/images'
import Tab from '../components/organisms/Tab'
import RiderTab from '../components/organisms/RiderTab'
import { colors } from '../theme/colors'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import CustomButton from '../components/atoms/CustomButton'
import CustomImage from '../components/atoms/CustomImage'
import RoutesCard from '../components/organisms/RoutesCard'
import NavigationService from '../navigation/NavigationService'

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      title: 'Looking For Ride',
      image: Images?.locationWhite, // or use uri: {uri: 'https://...'}
      isActive: activeTab === 0,
      onPress: () => setActiveTab(0),
    },
    {
      title: 'Offering Ride',
      image: Images?.myRideUnfocused,
      isActive: activeTab === 1,
      onPress: () => setActiveTab(1),
    },
  ];

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
      <CustomTextInput
        placeholder="Search destination"
        showSearchIcon={true}
        inputContainerStyle={{
          marginTop: moderateScale(20, 0.3)
        }}  
      />
      <Tab tabs={tabData} />

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(20, 0.3)
      }}>

        <RiderTab img={Images?.activeRider} title="Active Riders" count={'2847'} />
        <RiderTab img={Images?.savingIcon} title="Avg Saving" count={'$24'} />
      </View>

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
        <View style={{
          flexDirection: 'row',
          // justifyContent:'space-between',
          alignItems: 'center',
          gap: moderateScale(10, 0.3),
        }}>
          <CustomTextInput
            label={'From'}
            leftImage={Images?.locationIcon}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: colors?.gray,
            }}
            labelStyle={{
            }}
            containerStyle={{
              marginTop: moderateScale(10, 0.3),
              width: '80%',
              marginBottom: 0,

            }}
          />
          <TouchableOpacity
            style={{
              width: moderateScale(24, 0.3),
              height: moderateScale(24, 0.3),
              borderRadius: moderateScale(12, 0.3),
              backgroundColor: colors?.primary,
              padding: moderateScale(4, 0.3),
              width: '15%',
              height: moderateScale(50, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}
          >
            <CustomImage
              source={Images?.locationWhite}
              style={{
                width: moderateScale(30, 0.3),
                height: moderateScale(30, 0.3)
              }}
              resizeMode='contain'
            /></TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          // justifyContent:'space-between',
          alignItems: 'center',
          gap: moderateScale(10, 0.3),
        }}>
          <CustomTextInput
            label={'To'}
            leftImage={Images?.locationIcon}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: colors?.gray,
            }}
            containerStyle={{
              marginTop: moderateScale(10, 0.3),
              width: '80%',
              marginBottom: 0,

            }}

          />
          <TouchableOpacity
            style={{
              width: moderateScale(24, 0.3),
              height: moderateScale(24, 0.3),
              borderRadius: moderateScale(12, 0.3),
              backgroundColor: colors?.primary,
              padding: moderateScale(4, 0.3),
              width: '15%',
              height: moderateScale(50, 0.3),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}
          >
            <CustomImage
              source={Images?.parkingIcon}
              style={{
                width: moderateScale(30, 0.3),
                height: moderateScale(30, 0.3)
              }}
              resizeMode='contain'
            /></TouchableOpacity>
        </View>
        <CustomButton
          title={`Let's Go`}
          onPress={() => {
            NavigationService?.navigate('SearchScreen')
          }}
          style={{
            marginTop: moderateScale(20, 0.3)
          }}
        />
      </View>

      <TouchableOpacity
      onPress={() => {
        NavigationService?.navigate('AvailableRidesScreen')
      }}
      style={{
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(20, 0.3),
      }}>
        <CustomText style={styles?.textOne}>Where Do You Need To Go?</CustomText>
        <CustomText style={styles?.textTwo}>
          You've saved 12.4 kg Co2 this month.
        </CustomText>

        <CustomText style={{
          color: colors?.primary,
          fontFamily: fonts?.regular,
          fontSize: moderateScale(16, 0.3),
          marginTop: moderateScale(10, 0.3)
        }}>
          -3 Drives Available
        </CustomText>

        <CustomImage
          source={Images?.map}
          style={{
            width: '100%',
            height: moderateScale(150, 0.3),
            borderRadius: moderateScale(12, 0.3),
            marginTop: moderateScale(10, 0.3)
          }}
        />
      </TouchableOpacity>

      <View style={{
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(20, 0.3),
      }}>
        <CustomText style={{
          color: colors?.black,
          fontFamily: fonts?.semiBold,
          fontSize: moderateScale(18, 0.3),
        }}>Popular HOV Routes</CustomText>
<RoutesCard/>
<RoutesCard/>
<RoutesCard/>
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

export default HomeScreen