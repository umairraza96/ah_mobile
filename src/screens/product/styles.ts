import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  productContainer: {
    display: 'flex',
    paddingHorizontal: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 5,
  },
});

export default styles;
