import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

export default function ReservationList({ navigation }) {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.43.181:5000/api/reservations')
      .then(res => res.json())
      .then(data => {
        setReservations(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Réservations</Text>
      <FlatList
        data={reservations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Client ID: {item.client_id}</Text>
            <Text>Chambre ID: {item.room_id}</Text>
            <Text>Début: {new Date(item.start_date).toLocaleDateString()}</Text>
            <Text>Fin: {new Date(item.end_date).toLocaleDateString()}</Text>
            <Text>Prix total: {item.total_price} €</Text>
          </View>
        )}
      />
	        <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

