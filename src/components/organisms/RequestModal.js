import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ModalSkeleton from '../skeleton/ModalSkeleton'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../atoms/CustomText'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/font'
import CustomButton from '../atoms/CustomButton'

const RequestModal = ({onClose, visible}) => {
  return (
<ModalSkeleton onClose={onClose} visible={visible}>
    <View style={styles?.modalContent}>

        <CustomText style={styles?.text}>Your Request is sent to rider, please wait until the rider accept your request. We will notify you.</CustomText>
        <CustomButton
        title={"Done"}
        onPress={onClose}
        />
    </View>


</ModalSkeleton>
  )
}

const styles = StyleSheet.create({
        modalContent: {
      width: '100%',
      alignItems: 'center',
      gap: moderateScale(16, 0.3),
    },
    text : {
        fontSize : moderateScale(16, 0.3),
        color : colors?.gray,
        fontFamily: fonts?.regular,
        textAlign : 'center',
    }
})

export default RequestModal