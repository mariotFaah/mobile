import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default function EditClient({ route, navigation }) {
  const { client } = route.params;

  const [name, setName] = useState(client.name);
  const [phone, setPhone] = useState(client.phone);

  const handleUpdate = () => {
    fetch(`http://192.168.43.181:5000/api/clients/${client.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone })
    })
      .then(res => {
        if (!res.ok) throw new Error("Échec de la mise à jour");
        return res.json();
      })
      .then(() => {
        Alert.alert('Succès', 'Client modifié');
        navigation.goBack();
      })
      .catch(err => {
        console.error(err);
        Alert.alert('Erreur', 'Impossible de modifier le client');
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

      <Button title="Mettre à jour" onPress={handleUpdate} />
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

