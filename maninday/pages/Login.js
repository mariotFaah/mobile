import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
//import './DashboardScreen';

const LoginForm = () => {
	const navigation = useNavigation();

	const handleLogin = () => {
    // Redirection directe vers le Dashboard sans vérification
    navigation.navigate('DashboardScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentifiez-vous</Text>
      
      <Text style={styles.label}>Nom d'utilisateur</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom d'utilisateur"
      />
      
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre mot de passe"
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.button}  onPress={handleLogin} >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  fontWeight: '500',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginForm;
