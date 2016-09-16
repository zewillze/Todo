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
  font22: {
    fontSize: 22,
  },

  smallButton: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  normalButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

module.exports = commonStyles;
