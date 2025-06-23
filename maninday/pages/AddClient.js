import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function AddClient({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddClient = () => {
    if (!name || !phone) {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires');
      return;
    }

    fetch('http://192.168.43.181:5000/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone })
    })
      .then(res => {
        if (!res.ok) throw new Error("Échec de l'ajout");
        return res.json();
      })
      .then(() => {
        Alert.alert('Succès', 'Client ajouté');
        navigation.goBack(); // retourne à ClientList
      })
      .catch(err => {
        console.error(err);
        Alert.alert('Erreur', "Impossible d'ajouter le client");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Téléphone :</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Ajouter" onPress={handleAddClient} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

