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

const RoutesCard = () => {
  return (
    <View style={styles?.container}>

<View style={{
    flex: 1,
    // backgroundColor:'red'
}}>
    <View style={{
        flexDirection: 'row',
        gap : moderateScale(8,0.3),
        alignItems : 'center',
    }}>

<CustomText style={{
     color: colors?.black,
              fontFamily: fonts?.medium,
              fontSize: moderateScale(14, 0.3), 
}}>Seattle</CustomText>
<Icon
family='MaterialIcons'
name='arrow-right-alt'
size={moderateScale(26,0.3)}
color={colors?.primary}
/>
<CustomText style={{
     color: colors?.black,
              fontFamily: fonts?.medium,
              fontSize: moderateScale(14, 0.3), 
}}>Bellevue</CustomText>


    </View>

    <View style={{
        flexDirection: 'row',
        gap : moderateScale(8,0.3),
        alignItems : 'center',
    }}>
        <CustomImage
        source={Images?.clockIcon}
        style={{
            width : moderateScale(20, 0.3),
            height : moderateScale(20, 0.3),
        }}
        tintColor={colors?.gray}
        />
        <CustomText style={{
            color : colors?.gray,
            fontSize : moderateScale(14, 0.3)
        }}>Peak : 7-9 AM</CustomText>
    </View>

    <View style={{
        backgroundColor : colors?.white,
        marginTop : moderateScale(8,0.3),
        padding : moderateScale(4,0.3),
        width : '50%',
        borderRadius : moderateScale(6,0.3),
    }}>
        <CustomText style={{
            fontFamily : fonts?.semiBold,
            colors: colors?.black,
            fontSize: moderateScale(14, 0.3)
        }}>
 1-90 HOV
        </CustomText>
       


    </View>

 

</View>
   <CustomButton
   title={'Save $12'}
   style={{
    width : '30%',
    // backgroundColor : colors?.danger,
    paddingVertical : moderateScale(12,0.3), 
    borderRadius : moderateScale(6,0.3),
    paddingHorizontal : moderateScale(4,0.3),
    alignSelf : 'flex-start',
   }}
   textStyle={{
    fontSize : moderateScale(12, 0.3),
   }}
   />
    </View>
  )
}

const styles = StyleSheet?.create({
    container: {
        padding : moderateScale(12,0.3),
        backgroundColor: colors?.primaryLight,
        borderRadius : moderateScale(8,0.3),
        flexDirection : 'row',
        alighnItems : 'center',
        marginTop : moderateScale(12,0.3),
    }
})


export default RoutesCard