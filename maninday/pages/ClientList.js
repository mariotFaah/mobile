import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import BottomNavBar from '../components/BottomNavBar';

export default function ClientList({ navigation }) {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = () => {
    fetch('http://192.168.43.181:5000/api/clients')
      .then(res => res.json())
      .then(data => {
        setClients(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmer la suppression',
      'Voulez-vous vraiment supprimer ce client ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: () => {
            fetch(`http://192.168.43.181:5000/api/clients/${id}`, {
              method: 'DELETE',
            })
              .then(() => fetchClients())
              .catch((err) => console.error(err));
          },
        },
      ]
    );
  };

  const handleEdit = (client) => {
	    navigation.navigate('EditClient', { client });
    // TODO : Rediriger vers une page d'édition ou afficher une modal
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Clients</Text>
      <SwipeListView
        data={clients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.rowFront}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Téléphone : {item.phone}</Text>
          </View>
        )}
        renderHiddenItem={({ item }) => (
          <View style={styles.rowBack}>
            <TouchableOpacity style={styles.editBtn} onPress={() => handleEdit(item)}>
              <Text style={styles.btnText}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.id)}>
              <Text style={styles.btnText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={0}
        rightOpenValue={-160}
        disableRightSwipe={true}
        previewRowKey={'1'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
	  <TouchableOpacity
	  style={styles.fab}
	  onPress={() => navigation.navigate('AddClient')}
	  >
	  <Text style={styles.fabIcon}>＋</Text>
	</TouchableOpacity>

      <BottomNavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#333',
  },
  rowFront: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 20,
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
    backgroundColor: '#ddd',
  },
  editBtn: {
    backgroundColor: '#3498db',
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    borderRadius: 4,
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
	fab: {
  position: 'absolute',
  bottom: 80,
  right: 20,
  backgroundColor: '#3498db',
  width: 60,
  height: 60,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 4,
  },
  fabIcon: {
  fontSize: 30,
  color: 'white',
  },

});

