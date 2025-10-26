import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ScreenBoiler from '../components/skeleton/ScreenBoiler'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../theme/colors'
import { fonts } from '../theme/font'
import { moderateScale } from 'react-native-size-matters'
import CustomButton from '../components/atoms/CustomButton'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import NavigationService from '../navigation/NavigationService'
import Header from '../components/organisms/Header'

const OtpScreen = () => {

    const CELL_COUNT = 6;
// const autoComplete = Platform.select<TextInputProps['autoComplete']>({
//   android: 'sms-otp',
//   default: 'one-time-code',
// });

 const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return (
        <ScreenBoiler type={1}>
            <CustomText style={styles.heading}>
                Enter 6-digit code
            </CustomText>

            <CustomText style={styles?.subTitle}>Enter 6 digit code we send to your email</CustomText>

 <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        // autoComplete={autoComplete}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused && <Cursor />)}
          </Text>
        )}
      />
            <CustomButton
                title={'Verify'}
                style={styles?.btn}
                disabled={value?.length < 6}
                onPress={() => {
                    NavigationService?.navigate('PasswordScreen')
                }}
            />

            <CustomButton
                title={'Resend Code'}
                variant='transparent'
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
    },
    btn: {
        marginTop: moderateScale(16, 0.3),
    },
    codeFieldRoot:{
      // backgroundColor:'red'
    },
  cell: {
    width: moderateScale(47, 0.3),
    height: moderateScale(50, 0.3),
    fontSize: moderateScale(20, 0.3),
    backgroundColor: colors?.white,
    textAlign: 'center',
    color: colors?.gray,
    fontFamily: fonts?.regular,
    borderRadius: moderateScale(4, 0.3),
    textAlignVertical: 'center',
  },
  focusCell: {
    // borderColor: colors?.primary,
  },
})

export default OtpScreen