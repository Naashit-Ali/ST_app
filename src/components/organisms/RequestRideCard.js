import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../theme/colors'
import CustomText from '../atoms/CustomText'
import Icon from '../atoms/Icon'
import { fonts } from '../../theme/font'
import CustomButton from '../atoms/CustomButton'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'
import NavigationService from '../../navigation/NavigationService'

const RequestRideCard = ({onPressRideRequest}) => {
  return (
    <View style={styles?.container}>
        <View style={{
            flexDirection : 'row',
            justifyContent : 'space-between',
            alignItems : 'center',
        }}>
            <CustomText>MEMBER SINCE MARCH 2023</CustomText>
            <View style={{
                flexDirection : 'row',
                alignItems : 'center',
                gap : moderateScale(8,0.3),
            }}>
                <Icon
                    name='star'
                    family='MaterialIcons'
                    size={moderateScale(20,0.3)}
                    color={colors?.yellow}

                />
 <CustomText style={{
                        fontFamily : fonts?.medium,
                        fontSize : moderateScale(16,0.3),
                        color : colors?.black
                    }}>
                        4.8
                    </CustomText>



            </View>

        </View>

        <View style={{
            padding : moderateScale(6,0.3),
            marginTop : moderateScale(8,0.3),
            borderRadius : moderateScale(4,0.3),
            backgroundColor : colors?.primaryLight,
            width : '23%',
            alignItems : 'center',
            justifyContent : 'center',
        }}>
<CustomText style={{
    fontSize : moderateScale(14 , 0.3),
    fontFamily : fonts?.regular,
    color : colors?.primary
}}>
    About 
</CustomText>

        </View>


    <CustomText
        style={{
            fontFamily : fonts?.regular,
            fontSize : moderateScale(14,0.3),
            color : colors?.gray,
            marginTop : moderateScale(8,0.3),

        }}
    >Meet Alexa, a skilled driver who navigates the bustling streets of New Haven with ease with years of experience behind the wheel.</CustomText>


<View style={{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginVertical : moderateScale(8,0.3),
    marginTop : moderateScale(12,0.3),
}}>
    <View style={{
        flexDirection : 'row',
        alignItems : 'center',
        gap : moderateScale(8,0.3),
        

    }}>
<View style={{
padding : moderateScale(5,0.3),
backgroundColor : colors?.primaryLight,
borderRadius : moderateScale(50,0.3),
}}>
<CustomImage 
source={Images?.jeep}
style={{
    width : moderateScale(20, 0.3),
    height : moderateScale(20, 0.3),
    }}
resizeMode='cover'
/></View>
<CustomText style={{
    fontFamily : fonts?.regular,
    fontSize : moderateScale(14,0.3),
    color : colors?.gray,
}}>Vehicle</CustomText>
    </View>

<CustomText style={{
    fontFamily : fonts?.semiBold,
    fontSize : moderateScale(14, 0.3),
    color : colors?.black
}}>2022 Toyota Prius{' '}
<CustomText style={{
    color : colors?.danger

}}>
Red

</CustomText>

 </CustomText>
</View>

    <View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap : moderateScale(8,0.3),
    justifyContent : 'space-between',
    width : '100%',
    marginTop : moderateScale(10,0.3),
}}>

<CustomButton
title={'Profile'}
style={{
    width : '48%',
    borderRadius : moderateScale(4, 0.3),
    paddingVertical : moderateScale(10,0.3),
}}
variant='transparent'
/>

<CustomButton
title={'Request Ride'}
// variant='transparent'
onPress={onPressRideRequest
}
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

const styles = StyleSheet.create({
    container:{
        padding: moderateScale(12,0.3),
        borderRadius : moderateScale(6,0.3),
        backgroundColor : colors?.white,
        marginTop : moderateScale(12,0.3),
    }
})

export default RequestRideCard