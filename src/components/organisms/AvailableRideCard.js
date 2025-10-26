import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'
import Icon from '../atoms/Icon'
import CustomButton from '../atoms/CustomButton'
import NavigationService from '../../navigation/NavigationService'

const AvailableRideCard = () => {
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        // backgroundColor: 'red'
      }}>

<View style={{
    flexDirection : 'row',
    alignItems : 'center',
    gap : moderateScale(12,0.3),
    // backgroundColor:'blue'
}}>

    <CustomImage
    source={Images?.activeRider}
    style={{
        width : moderateScale(50,0.3),
        height : moderateScale(50,0.3),
        borderRadius : moderateScale(50,0.3),
        // backgroundColor:'green'
    }}
    resizeMode='contain'
    />

    <View>
        <CustomText style={{
            fontSize : moderateScale(16, 0.3),
            fontFamily : fonts?.semiBold,
            color : colors?.black,
        }}>MR Deof</CustomText>

        <View style={{
            flexDirection : 'row',
            alignItems : 'center',
            gap : moderateScale(5,0.3),
        }}>

            <Icon
            family='MaterialDesignIcons'
            name='star'
            size={moderateScale(14,0.3)}    
            color={colors?.yellow}
            />
            <CustomText style={{
                fontSize : moderateScale(14, 0.3),
                fontFamily : fonts?.regular,
                colors : colors?.gray
            }}>4.8 [56]</CustomText>
        </View>
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

<View style={{
    backgroundColor : colors?.gray,
    padding : moderateScale(4,0.3),
    borderRadius : moderateScale(4,0.3),
}}>
    <CustomText>Past Rider</CustomText>
</View>
</View>



      </View>

      <View style={{
        // backgroundColor : 'red',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginTop : moderateScale(12,0.3),

      }}>

        <View>

            <CustomText style={{
                fontFamily : fonts?.regular,
                fontSize : moderateScale(14,0.3),
                color : colors?.gray
            }}>Route</CustomText>
            <CustomText
            style={{
                color : colors?.themeBlackV2,
                fontFamily: fonts?.medium,
                fontSize : moderateScale(16, 0.3)
            }}
            >683203</CustomText>
        </View>

<Icon
name='arrow-right-alt'
family='MaterialIcons'
size={moderateScale(26,0.3)}
color={colors?.primary}
/>

         <View>

            <CustomText style={{
                fontFamily : fonts?.regular,
                fontSize : moderateScale(14,0.3),
                color : colors?.gray
            }}>Route</CustomText>
            <CustomText
            style={{
                color : colors?.themeBlackV2,
                fontFamily: fonts?.medium,
                fontSize : moderateScale(16, 0.3)
            }}
            >683203</CustomText>
        </View>



      </View>


<View>

<View style={{
    flexDirection : 'row',
    gap : moderateScale(8,0.3),
    alignItems : 'center',
    justifyContent : 'space-between',
    marginTop : moderateScale(12,0.3),
}}>

    <View style={{
        flexDirection : 'row',
        gap : moderateScale(8,0.3),
        alignItems : 'center',

    }}>

        <View style={{
            flexDirection : 'row',
            gap : moderateScale(4,0.3),
            alignItems : 'center',
        }}>
<CustomImage
source={Images?.clockIcon}
style={{
    width : moderateScale(20, 0.3),
    height : moderateScale(20, 0.3),
}}
/>
<CustomText style={{
    fontFamily : fonts?.regular,
    fontSize : moderateScale(14, 0.3),
    color : colors?.gray
}}>
    8:15 AM
</CustomText>

        </View>
        <View style={{
            flexDirection : 'row',
            gap : moderateScale(4,0.3),
            alignItems : 'center',
        }}>
<CustomImage
source={Images?.mileIcon}
style={{
    width : moderateScale(20, 0.3),
    height : moderateScale(20, 0.3),
}}
/>
<CustomText style={{
    fontFamily : fonts?.regular,
    fontSize : moderateScale(14, 0.3),
    color : colors?.gray
}}>
    12.5 Mi
</CustomText>

        </View>




    </View>

    <CustomText style={{
    fontFamily : fonts?.regular,
    fontSize : moderateScale(14, 0.3),
    color : colors?.primary
}} >$ 26</CustomText>

</View>

<View
style={{
    height : 1,
    backgroundColor : colors?.skeletonBackground,
    marginTop : moderateScale(12,0.3),
}}
/>

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
title={'Profile'}
onPress={() => {
    NavigationService?.navigate('DriverProfileScreen')
}}
style={{
    width : '48%',
    borderRadius : moderateScale(4, 0.3)
    , paddingVertical : moderateScale(10,0.3),
}}
variant='transparent'
/>

<CustomButton
title={'Request Ride'}
// variant='transparent'
onPress={() => {
    NavigationService?.navigate('ViewMapScreen')
}}
style={{
    width : '48%',
    borderRadius : moderateScale(4, 0.3)
, paddingHorizontal : moderateScale(0,0.3),
paddingVertical : moderateScale(12,0.3),
}}
/>
</View>




</View>



    </View>
  )
}

const styles = StyleSheet?.create({
    container: {
    width : '100%',
    backgroundColor : colors?.white,
    padding : moderateScale(12,0.3),
    borderRadius : moderateScale(8,0.3),
    marginTop : moderateScale(12,0.3),
    }
})

export default AvailableRideCard