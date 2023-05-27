import React, {useState, useEffect} from 'react';
import {ScrollView, View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header';
import {AntDesign} from '@expo/vector-icons';
import {styles} from './styles';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

type detailsPatientType = {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: string;
  phone: number;
  cpf: number;
  rg: number
}

type patientsListType = {
  id: any;
  data: Array<detailsPatientType>;
}

export function ListPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    firestore()
      .collection('patients')
      .get()
      .then((response) => {
        const data: Array<any> = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        // @ts-ignore
        setPatients(data);
      })
      .catch((error) => {
        alert('Houve um erro carregando a lista de pacientes');
        console.log(error);
      })
  }, []);
  const navigation = useNavigation();

  function handleDetailsPatient({id, name, email, gender, phone, age, cpf, rg}: detailsPatientType) {
    navigation.navigate('detailsPatient', {
      id,
      name,
      email,
      gender,
      phone,
      age,
      cpf,
      rg
    });
  }

  return (
    <View>
      <Header title="Meus Pacientes"/>
      <>
        {/*<View style={styles.containerSearch}>*/}
        {/*    <TextInput*/}
        {/*        style={styles.inputSearch}*/}
        {/*        placeholder="Pesquise o paciente"*/}
        {/*    />*/}
        {/*    <AntDesign style={styles.iconSearch} name="search1" size={25} />*/}
        {/*</View>*/}
        <FlatList
          data={patients}
          renderItem={({item}) => (
            <View style={styles.containerList}>
              <TouchableOpacity style={styles.containerPatient} onPress={() => handleDetailsPatient(item)}>
                <Ionicons name="person" size={30} color="black"/>
                <Text style={styles.patientText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </>
    </View>
  )
}
