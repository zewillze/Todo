import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  mediumFont: {
    fontFamily: 'GothamRounded-Medium',
  },
  normalFont: {
    fontFamily: 'GothamRounded-Book',
  },

  font8: {
    fontSize: 8,
  },
  font9: {
    fontSize: 9,
  },
  font10: {
    fontSize: 10,
  },
  font11: {
    fontSize: 11,
  },
  font13: {
    fontSize: 13,
  },
  font14: {
    fontSize: 14,
  },
  font23: {
    fontSize: 23,
  },
  font24: {
    fontSize: 24,
  },
  font25: {
    fontSize: 25,
  },


  smallButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

module.exports = commonStyles;
