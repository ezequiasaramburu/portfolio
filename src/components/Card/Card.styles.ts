import {StyleSheet} from 'react-native';
import colors from 'src/style/color';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colors.black,
  },
});
