import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RoomList from './pages/RoomList';
import EditClient from './pages/EditClient';
import AddClient from './pages/AddClient';

// Import des nouvelles pages
import ClientList from './pages/ClientList';
import ReservationList from './pages/ReservationList';
import PaymentList from './pages/PaymentList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="RoomList"
          component={RoomList}
          options={{ title: 'Liste des chambres' }}
        />
        <Stack.Screen 
          name="DashboardScreen" 
          component={Dashboard} 
          options={{ headerShown: false }} 
        />
        {/* Nouvelles pages */}
        <Stack.Screen 
          name="ClientList" 
          component={ClientList} 
          options={{ title: 'Liste des clients' }} 
        />
        <Stack.Screen 
          name="ReservationList" 
          component={ReservationList} 
          options={{ title: 'Liste des réservations' }} 
        />
        <Stack.Screen 
          name="PaymentList" 
          component={PaymentList} 
          options={{ title: 'Liste des paiements' }} 
        />
	  <Stack.Screen
	  name="EditClient"
	  component={EditClient}
	  options={{ title: 'Modifier Client' }}
	/>
	<Stack.Screen 
	  name="AddClient" 
	  component={AddClient} 
	  options={{ title: 'Ajouter un client' }} 
	/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

