const React = require('react-native');

const {
  StyleSheet,
  Dimensions,
  Animated,
} = React;
const deviceScreen = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#222',
  },
  menu: {
    flex: 1,
    backgroundColor: 'transparent',
    width: deviceScreen.width * 2 / 3,
  },
  frontView: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});
