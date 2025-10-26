import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import { moderateScale } from 'react-native-size-matters'
import CustomTextInput from '../components/atoms/CustomTextInput'
import CustomText from '../components/atoms/CustomText'
import { fonts } from '../theme/font'
import { colors } from '../theme/colors'
import AvailableRideCard from '../components/organisms/AvailableRideCard'

const AvailableRidesScreen = () => {
    return (
        <ScreenBoiler
            mainContainerStyle={{
                flexGrow: 1,
                paddingBottom: moderateScale(120, 0.3),
                // backgroundColor : 'red'
            }}
             containerStyle={{
        // flexGrow : 1,
        // backgroundColor:'red'
                        // paddingBottom: moderateScale(120, 0.3),

      }}
        >

            <CustomTextInput
                placeholder="Search destination"
                showSearchIcon={true}
                inputContainerStyle={{
                    marginTop: moderateScale(20, 0.3)
                }}
            />

            <CustomText style={{
                marginTop: moderateScale(10, 0.3),
                fontSize: moderateScale(18, 0.3),
                fontFamily: fonts?.medium,
                color: colors?.black,
            }}>Available Rides</CustomText>

            <AvailableRideCard/>
                        <AvailableRideCard/>

        </ScreenBoiler>

    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AvailableRidesScreen;