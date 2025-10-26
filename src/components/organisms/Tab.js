import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/font';
import { moderateScale } from 'react-native-size-matters';

const Tab = ({ tabs }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            tab.isActive && styles.activeTab,
          ]}
          onPress={tab.onPress}
          activeOpacity={0.7}>
          {tab.image && (
            <Image
              source={tab.image}
              style={styles.icon}
              resizeMode="contain"
              tintColor={tab.isActive ? colors?.white : colors?.gray}
            />
          )}
          <Text
            style={[
              styles.tabText,
              tab.isActive && styles.activeTabText,
            ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    padding: 4,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(12, 0.3),
    borderRadius: moderateScale(50, 0.3),
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor : colors.primary,
  },
  icon: {
    width: moderateScale(20, 0.6),
    height: moderateScale(20, 0.6),
    marginRight: moderateScale(8, 0.3),
  },
  tabText: {
    fontSize: moderateScale(14, 0.3),
    color: colors?.gray,
    fontFamily: fonts?.medium,
  },
  activeTabText: {
    color: colors?.white,
    fontFamily: fonts?.medium,
    fontSize : moderateScale(14,0.3)
  },
});

export default Tab;