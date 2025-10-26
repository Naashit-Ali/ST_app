import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../theme/font';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import CustomText from '../components/atoms/CustomText';
import CustomTextInput from '../components/atoms/CustomTextInput';
import CustomButton from '../components/atoms/CustomButton';
import NavigationService from '../navigation/NavigationService';
import CustomImage from '../components/atoms/CustomImage';
import Images from '../assets/images';
import CustomDropdown from '../components/organisms/CustomDropdown';
import Icon from '../components/atoms/Icon';

const SetupProfileScreen = () => {
    return (
        <ScreenBoiler type={1}>
            <CustomText style={styles.heading}>
                Profile Setup
            </CustomText>
            <CustomText style={styles?.subTitle}>Setup your profile picture and other details</CustomText>

            <View style={styles?.imageContainer}>

                <CustomImage
                    source={Images?.porfileImage}
                    style={styles?.img}
                    resizeMode='cover'
                />


                <Icon
                    name={'camera-outline'}
                    family='MaterialDesignIcons'
                    containerStyle={styles?.editContainer}
                    color={colors?.white}
                    size={moderateScale(20, 0.3)}
                />

            </View>
            <CustomTextInput placeholder="Full Name" />
            <CustomTextInput placeholder="Address" />
            <CustomDropdown placeholder={'City'} />

            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                gap: moderateScale(10, 0.3),

            }}>
                <CustomDropdown
                    style={{ width: '40%' }}
                    placeholder={'State'}
                />

                <CustomTextInput
                    placeholder='Zip Code'
                    // inputContainerStyle={{ width: '78%' }}
                    inputStyle={{
                        width: '50%'
                    }}
                />

            </View>
            <CustomButton
                title={'Save'}
                onPress={() => {
                    NavigationService?.navigate('LoginScreen');
                }}
                style={styles?.btn}
            />
        </ScreenBoiler>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: colors?.black,
        fontSize: moderateScale(24, 0.3),
        fontFamily: fonts?.bold,
        marginBottom: moderateScale(6, 0.3),
        marginTop: moderateScale(16, 0.3),
    },
    subTitle: {
        color: colors?.gray,
        fontSize: moderateScale(14, 0.3),
        fontFamily: fonts?.regular,
        marginBottom: moderateScale(24, 0.3),
        marginTop: moderateScale(0, 0.3),
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: moderateScale(100, 0.3),
        alignSelf: 'center',
        marginBottom: moderateScale(30, 0.3),
    },
    img: {
        width: moderateScale(100, 0.3),
        height: moderateScale(100, 0.3),
        borderRadius: moderateScale(50, 0.3),
    },
    editContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors?.primary,
        padding: moderateScale(4, 0.3),
        borderRadius: moderateScale(50, 0.3),
        padding: moderateScale(8, 0.3),
    },
    edit: {
        width: moderateScale(20, 0.3),
        height: moderateScale(20, 0.3),
        borderRadius: moderateScale(10, 0.3),
    },
    btn: {
        marginTop: moderateScale(20, 0.3),
    }
})

export default SetupProfileScreen