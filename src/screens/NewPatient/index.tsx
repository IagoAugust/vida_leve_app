import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, Stack } from '@react-native-material/core';
import { Header } from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export function NewPatient() {

  return (
    <View>
      <Header title='Novo Paciente' />
    </View>

  );
}
