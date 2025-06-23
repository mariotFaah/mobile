import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import HousingList from '../screens/Housing/List';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HousingList" component={HousingList} />
    </Stack.Navigator>
  );
}
