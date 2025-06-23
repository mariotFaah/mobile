import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
        <Icon name="home-outline" size={24} color="#2c3e50" />
        <Text style={styles.label}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RoomList')}>
        <Icon name="bed-outline" size={24} color="#2c3e50" />
        <Text style={styles.label}>Chambres</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ClientList')}>
        <Icon name="people-outline" size={24} color="#2c3e50" />
        <Text style={styles.label}>Clients</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ReservationList')}>
        <Icon name="calendar-outline" size={24} color="#2c3e50" />
        <Text style={styles.label}>Réservations</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PaymentList')}>
        <Icon name="card-outline" size={24} color="#2c3e50" />
        <Text style={styles.label}>Paiements</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingBottom: 20,
    backgroundColor: '#ecf0f1',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 20, // Monte la barre au-dessus de la barre de navigation système
    left: 0,
    right: 0,
    zIndex: 10,
  },
  label: {
    fontSize: 12,
    color: '#2c3e50',
    marginTop: 4,
    textAlign: 'center',
  },
});

