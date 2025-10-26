import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { moderateScale } from 'react-native-size-matters'
import CustomImage from '../atoms/CustomImage'
import CustomText from '../atoms/CustomText'
import { fonts } from '../../theme/font'

const RiderTab = ({ img, title, count }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: moderateScale(8, 0.3), alignItems: 'center' }}>
                <CustomImage
                    source={img}
                    style={styles?.img}
                    resizeMode='contain'
                />
                <CustomText
                    numberOfLines={1}
                style={styles?.text}>{title}</CustomText>
            </View>
            <CustomText 
            numberOfLines={1}
            style={styles?.count}>{count}</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors?.white,
        padding: moderateScale(16, 0.3),
        borderRadius: moderateScale(8, 0.3),
        gap: moderateScale(8, 0.3),
        width: '48%'
    },
    img: {
        width: moderateScale(24, 0.3),
        height: moderateScale(24, 0.3),
    },
    text: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.black,
        fontFamily: fonts?.regular,
    },
    count: {
        fontSize: moderateScale(26, 0.3),
        color: colors?.primary,
        fontFamily: fonts?.semiBold,
    }
})

export default RiderTab