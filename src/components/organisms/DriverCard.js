import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import Icon from '../atoms/Icon'
import CustomButton from '../atoms/CustomButton'

const DriverCard = () => {
  return (
    <View style={styles?.container}>

        <View style={{
            flexDirection : 'row',
            justifyContent : 'space-between',
            alignItems : 'center',

        }}>

            <View>
                <CustomText style={{
                    fontFamily : fonts?.medium,
                    fontSize : moderateScale(18,0.3),
                    color : colors?.black
                }}>Alex Carter</CustomText>

                <View style={{
                    flexDirection : 'row',
                    alignItems : 'center',
                    // gap : moderateScale(5,0.3),

                }}>

              {[1, 2, 3, 4, 5].map((item, index) => (
  <Icon
    key={index}
    name="star"
    family="MaterialIcons"
    color={colors?.yellow}
    size={moderateScale(20, 0.3)}
  />
))}
</View>
            </View>

            <View style={{
    // backgroundColor:'yellow',
    alignItems : 'flex-end',
}}> 
<CustomText style={{
    fontFamily : fonts?.medium,
    fontSize : moderateScale(24, 0.3),
    color : colors?.primary,
}}>72% <CustomText style={{
    fontFamily : fonts?.regular,
    fontSize : moderateScale(12, 0.3)
}}>Match</CustomText></CustomText>
</View>


        </View>

        <CustomText style={{
    fontFamily : fonts?.medium,
    fontSize : moderateScale(18, 0.3),
    color : colors?.black,
    marginTop: moderateScale(10,0.3)
}}>Vehicle Details</CustomText>

<View style={{
    marginTop : moderateScale(16,0.3),
    // backgroundColor:'red',
    gap : moderateScale(6,0.3),
    flexDirection : 'row',
    alignItems : 'center',
    width : '100%',
    // flex : 1
}}>

    {['Toyoya Prius','2022','Red', '2 Seats'].map((item,index) =>
    <View style={{
        backgroundColor: colors?.primaryLight,
        padding : moderateScale(8,0.3),
        borderRadius : moderateScale(4,0.3),


    }}>
    <CustomText key={index} style={{
        fontFamily : fonts?.medium,
        fontSize : moderateScale(14, 0.3),
        color : colors?.black,
    }}>
        {item}

    </CustomText></View>
    )}




</View>

<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap : moderateScale(8,0.3),
    justifyContent : 'space-between',
    width : '100%',
    marginTop : moderateScale(16,0.3),
}}>

<CustomButton
title={'View Profile'}
style={{
    width : '48%',
    borderRadius : moderateScale(4, 0.3)
    , paddingHorizontal : moderateScale(0,0.3),
    paddingVertical : moderateScale(10,0.3),

}}
variant='transparent'
/>

<CustomButton
title={'Message'}
// variant='transparent'
style={{
    width : '48%',
    borderRadius : moderateScale(4, 0.3)
, paddingHorizontal : moderateScale(0,0.3),
    paddingVertical : moderateScale(12,0.3),
}}
/>
</View>

    </View>
  )
}

const styles = StyleSheet?.create({
    container: {
        backgroundColor : colors?.white,
        padding : moderateScale(12,0.3),
        borderRadius : moderateScale(8,0.3),
    }

})

export default DriverCard