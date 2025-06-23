import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Button = ({ title, onPress, icon, style }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={[styles.button, style]}
  >
    {icon && <Icon name={icon} size={20} color="white" style={styles.icon} />}
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#2c3e50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10
  },
  icon: {
    marginRight: 5
  }
});
