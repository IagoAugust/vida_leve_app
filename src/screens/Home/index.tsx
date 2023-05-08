import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, Stack } from '@react-native-material/core';
import { Header } from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NewPacientes } from '../NewPacients';

export function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Header title='Vida Leve' />
      <Stack center spacing={2} >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('NewPacientes') }
        >
          <Avatar icon={props => <Ionicons name="person-add" size={20} color="#000" />} size={35} color='#B3E5FC'  />
          <Text style={styles.buttonText}>Novo Paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => { alert('Esse botão é de Meus Pacientes') }}
        >
          <Avatar icon={props => <MaterialIcons name="people-alt" size={20} color="#000" />} size={35} color='#B3E5FC'  />
          <Text style={styles.buttonText}>Meus Pacientes</Text>
        </TouchableOpacity>
      </Stack>
    </View>

  );
}
