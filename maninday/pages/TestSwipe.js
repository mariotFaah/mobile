import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function TestSwipe() {
  const [data, setData] = useState([
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' },
    { id: '3', name: 'Client C' },
  ]);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rowFront}>
            <Text>{item.name}</Text>
          </View>
        )}
        renderHiddenItem={({ item }) => (
          <View style={styles.rowBack}>
            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
              <Text style={styles.btnText}>Supprimer</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={0}
        rightOpenValue={-75}
        disableRightSwipe={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  rowFront: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#f00',
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  deleteBtn: {
    backgroundColor: '#e74c3c',
    width: 75,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
  },
});

