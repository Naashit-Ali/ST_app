import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../../theme/colors';
import { moderateScale, s } from 'react-native-size-matters';
import { fonts } from '../../theme/font';
import CustomText from '../atoms/CustomText';

const CustomDropdown = ({
    data,
    value,
    setValue,
    placeholder,
    errorText,
    style,
    dropdownStyle,
}) => {
    const { width, height } = useWindowDimensions();
    const styles = customStyleSheet(width, height);

    return (
        <View style={[styles?.container, style]}>
            <Dropdown
                style={[styles?.dropdown, dropdownStyle]}
                data={data || []}
                selectedTextStyle={styles?.textStyle}
                labelField="label"
                valueField="value"
                placeholderStyle={styles?.placeholderStyle}
                maxHeight={moderateScale(300, 0.3)}
                placeholder={placeholder ? placeholder : "Select item"}
                value={value}
                onChange={item => {
                   setValue && setValue(item);
                }}
            />

          {errorText &&  <CustomText style={styles?.errorText}>{errorText}</CustomText>}
        </View>
    )
}

const customStyleSheet = (width, height) => StyleSheet.create({
    container: {
        width: '100%',
    },
    dropdown: {
        // width: '100%',
        // borderWidth: 1,
        // borderColor: colors?.lightGrayV2,
        backgroundColor: colors?.white,
        borderRadius: moderateScale(6, 0.3),
        paddingHorizontal: moderateScale(16, 0.3),
        paddingVertical: moderateScale(16, 0.3),
              marginBottom: moderateScale(12, 0.3),

    },
    placeholderStyle: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.gray,
        fontFamily: fonts?.medium,
    },
    textStyle: {
        fontSize: moderateScale(14, 0.3),
        color: colors?.themeBlack,
        fontFamily: fonts?.medium,
    }, 
    errorText:{
        color: colors?.error,
        fontSize: moderateScale(12, 0.3),
        fontFamily: fonts?.regular,
        marginTop: moderateScale(8, 0.3),
        marginLeft: moderateScale(10, 0.3),
    }
})

export default CustomDropdown