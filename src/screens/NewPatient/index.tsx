import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Button } from 'react-native';
import { Avatar, Icon, Stack } from '@react-native-material/core';
import { Header } from '../../components/Header';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import Input from '../../components/Input';
import { Picker } from '@react-native-picker/picker';

export function NewPatient() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState(''); 
  const [rg, setRg] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    // Aqui você pode fazer o envio dos dados para o Firebase
    if ( name !== '' && age !== '' && email !== '' && phone !== '' && cpf !== '' && rg !== '' && gender !== '' ){
      console.log({ name, age, email });
    }else{
      alert('Preencha todos os dados');
    }
  };

  return (
    <View>
      <Header title='Novo Paciente' />
      <ScrollView>
        <TouchableOpacity style={styles.cameraButton} >
          <Avatar icon={<Entypo name="camera" size={40} color="black"  />}color='#b9b9b9' />
        </TouchableOpacity>
        
        <Input 
          label='Nome'
          placeholder='Insira o nome do paciente'
          value={name}
          onChangeText={setName}
          // returnKeyType='next'
        />

        <Input 
          label='Email'
          placeholder='Insira o Email do paciente'
          value={email}
          onChangeText={setEmail}
        />


        <Input 
          label='Idade'
          keyboardType='numeric'
          placeholder='Insira a idade do paciente'
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.textPicker}>Gênero</Text>
        <View style={styles.picker}>
          <Picker 
            selectedValue={gender}
            onValueChange={currentCurrency => setGender(currentCurrency)}>
            <Picker.Item label="Selecione o seu gênero " value="" enabled={true} />
            <Picker.Item label="Masculino" value="masculino"  />
            <Picker.Item label="Feminino" value="feminino" />
            <Picker.Item label="Outros" value="outros" />
          </Picker>
        </View>

        <Input 
          label='Telefone'
          placeholder='Digite o número de telefone do paciente'
          keyboardType='numeric'
          value={phone}
          onChangeText={setPhone}

        /> 

        <Input 
          label='CPF'
          placeholder='Digite o número de CPF do paciente'
          keyboardType='numeric'
          value={cpf}
          onChangeText={setCpf}

        /> 

        <Input 
          label='RG'
          placeholder='Digite o número de RG do paciente'
          keyboardType='numeric'
          value={rg}
          onChangeText={setRg}

        /> 


        <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
      
    </View>

  );
}
