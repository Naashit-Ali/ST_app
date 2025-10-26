import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import { fonts } from '../../theme/font'
import CustomText from '../atoms/CustomText'
import CustomImage from '../atoms/CustomImage'
import Images from '../../assets/images'
import Icon from '../atoms/Icon'

const ReviewCard = () => {
    return (
        <View style={styles?.container}>
            <CustomText style={styles?.text}>I had a fantistic ride with Mr.Deof! He was on-time, courteous, and navigated the busy streets like a pro. I highly recommend him!</CustomText>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: moderateScale(12, 0.3),
                width: '100%',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: moderateScale(8, 0.3),
                }}>

                    <CustomImage
                        source={Images?.activeRider}
                        style={{
                            width: moderateScale(30, 0.3),
                            height: moderateScale(30, 0.3),
                            borderRadius: moderateScale(50, 0.3),
                        }}
                        resizeMode='cover'
                    />

                    <View style={{
                    }}>
                        <CustomText style={{
                            fontFamily: fonts?.semiBold,
                            fontSize: moderateScale(14, 0.3),
                            color: colors?.black,
                        }}
                        >MR Deof</CustomText>

                        <CustomText style={{
                            fontFamily: fonts?.regular,
                            fontSize: moderateScale(12, 0.3),
                            color: colors?.gray,
                        }}>
                            @mr_deof@gmail.com
                        </CustomText>

                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: moderateScale(2, 0.3),
                }}>

                    <Icon
                        name="star"
                        family="MaterialIcons"
                        size={moderateScale(22, 0.3)}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors?.white,
        padding: moderateScale(12, 0.3),
        borderRadius: moderateScale(8, 0.3),
        marginTop: moderateScale(10, 0.3),
    },
    text: {
        fontFamily: fonts?.regular,
        fontSize: moderateScale(14, 0.3),
        color: colors?.gray,
    }
})

export default ReviewCard