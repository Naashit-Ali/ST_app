import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../components/atoms/CustomImage'
import Images from '../assets/images'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'
import ReviewCard from '../components/organisms/ReviewCard'
import RequestRideCard from '../components/organisms/RequestRideCard'
import ModalSkeleton from '../components/skeleton/ModalSkeleton'
import RequestModal from '../components/organisms/RequestModal'

const DriverProfileScreen = () => {
  const [isRequestModal , setIsRequestModal] = useState(false);
  return (
    <ScreenBoiler
      // scrollEnabled
      type={3}
      headerTitle='Driver Profile'
      mainContainerStyle={{
        flexGrow: 1,
        paddingBottom: moderateScale(120, 0.3)
      }}
      containerStyle={{
        // flexGrow : 1,
        // backgroundColor:'red'
      }}
    >

        <CustomImage
        source={Images?.activeRider}
        style={{
            width : moderateScale(100, 0.6),
            height : moderateScale(100 , 0.6),
            borderRadius : moderateScale(50, 0.3),
            alignSelf : 'center',
            marginTop : moderateScale(20,0.3)
        }}
        resizeMode='cover'
        />

        <CustomText style={{
            fontFamily : fonts?.medium,
            fontSize : moderateScale(16,0.3),
            color : colors?.black,
            textAlign : 'center',
        }}>Alex Carter</CustomText>
        <CustomText
         style={{
            fontFamily : fonts?.regular,
            fontSize : moderateScale(14,0.3),
            color : colors?.black,
            textAlign : 'center',
        }}
        
        >alexCarter76@gmail.com</CustomText>

        <RequestRideCard  onPressRideRequest={() => {
          setIsRequestModal(true)
        }}/>

        <CustomText style={{
            fontFamily : fonts?.medium,
            fontSize : moderateScale(18, 0.3),
            color : colors?.black,
            marginVertical : moderateScale(10,0.3)
        }}>
            Recent Reviews
        </CustomText>

        <ReviewCard/>
            <ReviewCard/>

           
<RequestModal
visible={isRequestModal}
onClose={() => {setIsRequestModal(false)}}
/>
        </ScreenBoiler>
  )
}

const styles = StyleSheet.create({})

export default DriverProfileScreen;