import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import PhoneInput from "react-native-phone-number-input";
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../theme/font';
import { colors } from '../../theme/colors';


const CustomPhoneInput = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);
    return (
        <View style={styles.container}>
            <PhoneInput
                ref={phoneInput}
                containerStyle={styles?.phoneContainer}
                defaultValue={value}
                placeholder='12345678'
                textContainerStyle={styles?.textInputStyle}
                codeTextStyle={styles?.codeTextStyle}
                textInputStyle={styles?.inputStyle}
                countryPickerButtonStyle={styles?.pickerStyle}
                layout="first"
                defaultCode="PK" // 👈 Set a default country code
                flagButtonStyle={styles?.flagButtonStyle}
                countryPickerProps={{
                    withFlag: true, // 👈 Ensures flag is shown
                }}
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    phoneContainer: {
        width: '100%',
        borderRadius: moderateScale(6, 0.3),
    },
    textInputStyle: {
        paddingVertical: moderateScale(5, 0.3),
        borderRadius: moderateScale(6, 0.3),
        fontFamily: fonts?.regular,
        color: colors?.black,
        fontSize: moderateScale(14, 0.3),
    },
    codeTextStyle: {
        fontFamily: fonts?.medium,
        color: colors?.black,
        fontSize: moderateScale(14, 0.3),
    },
    inputStyle: {
        fontFamily: fonts?.regular,
        color: colors?.black,
        fontSize: moderateScale(15, 0.3),
    },

    flagButtonStyle: {}

})

export default CustomPhoneInput