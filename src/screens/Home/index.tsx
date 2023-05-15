import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, Stack } from '@react-native-material/core';
import { Header } from '../../components/Header';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import {NewPatient} from '../NewPatient';

export function Home() {
  const navigation = useNavigation();
  function handleNewPatient() {
    navigation.navigate('newPatient');
  }
  function handleListPatients(){
    navigation.navigate('listPatients');
  };
  function handleCalendar(){
    navigation.navigate('calendar');
  }

  return (
    <View>
      <Header title='Vida Leve' />
      <Stack center spacing={2} >
        <TouchableOpacity
          style={styles.button}
          onPress={handleNewPatient}
        >
          <Avatar icon={props => <Ionicons name="person-add" size={20} color="#000" />} size={35} color='#B3E5FC'  />
          <Text style={styles.buttonText}>Novo Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleListPatients}
        >
          <Avatar icon={props => <MaterialIcons name="people-alt" size={20} color="#000" />} size={35} color='#B3E5FC'  />
          <Text style={styles.buttonText}>Meus Pacientes</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={handleCalendar}
        >
          <Avatar icon={props => <Entypo name="calendar" size={20} color="#000" />} size={35} color='#B3E5FC'  />
          <Text style={styles.buttonText}>Agendamento</Text>
        </TouchableOpacity>
      </Stack>
    </View>

  );
}
