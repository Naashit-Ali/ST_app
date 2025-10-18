import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../components/atoms/CustomButton';
import CustomText from '../components/atoms/CustomText';
import CustomTextInput from '../components/atoms/CustomTextInput';
import SocialLoginButton from '../components/molecules/SocialLoginButton';
import ScreenBoiler from '../components/skeleton/ScreenBoiler';
import {colors} from '../theme/colors';
import {fonts} from '../theme/font';
import NavigationService from '../navigation/NavigationService';
import CustomImage from '../components/atoms/CustomImage';
import Images from '../assets/images';
import HaveAccount from '../components/molecules/HaveAccount';

const SignUpScreen = () => {
  return (
    <ScreenBoiler headerType={2} headerTitle="Back">
      <View style={styles.container}> 
        <CustomText style={styles.heading}>
          Get Started With {`\n`} Slug Tag
        </CustomText>
        <CustomTextInput placeholder="Full Name" />
        <CustomTextInput placeholder="Email" />

        <View style={styles.termsContainer}>
          <CustomImage
            source={Images?.logo}  // image of check mark
            style={styles.checkImage} 
            resizeMode="contain"
          />
          <CustomText style={styles.termText}>
            By signing up, you agree to the Terms of service and Privacy Policy
          </CustomText>
        </View>

        <CustomButton 
          title={'Get Started'}
          onPress={() => {
            NavigationService?.navigate('OtpScreen');
          }}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <CustomText style={styles.dividerText}>
            OR
          </CustomText>
          <View style={styles.dividerLine} />
        </View>

        <SocialLoginButton variant="Google" />
        <SocialLoginButton variant="Facebook" />
        <SocialLoginButton variant="Instagram" />
      </View>

      <HaveAccount isLogin={false}/>
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: colors?.black,
    fontSize: moderateScale(24, 0.3),
    fontFamily: fonts?.bold,
    marginBottom: moderateScale(24, 0.3),
    marginTop: moderateScale(16, 0.3),
  },
  termsContainer: {
    flexDirection: 'row',
    gap: moderateScale(10, 0.3),
    marginVertical: moderateScale(10, 0.3),
  },
  checkImage: {
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
  },
  termText: {
    flex: 1,
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.regular,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors?.gray,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: colors?.lightGray,
  },
});

export default SignUpScreen;