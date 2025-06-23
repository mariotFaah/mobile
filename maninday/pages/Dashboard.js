import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
	  <TouchableOpacity
	  style={styles.button}
	  onPress={() => navigation.navigate('RoomList')}
	>
 	 <Text style={styles.buttonText}>Voir les chambres</Text>
	</TouchableOpacity>
	  <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('ClientList')}
>
  <Text style={styles.buttonText}>Voir les clients</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('ReservationList')}
>
  <Text style={styles.buttonText}>Voir les réservations</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('PaymentList')}
>
  <Text style={styles.buttonText}>Voir les paiements</Text>
</TouchableOpacity>
	  <BottomNavBar navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
