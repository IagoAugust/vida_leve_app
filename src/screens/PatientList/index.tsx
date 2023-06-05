import React, {useState, useEffect} from 'react';
import {ScrollView, View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header';
import {AntDesign} from '@expo/vector-icons';
import {styles} from './styles';
import {Ionicons} from '@expo/vector-icons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

type detailsPatientType = {
  id: string;
  name: string;
}

type patientsListType = {
  id: any;
  data: Array<detailsPatientType>;
}

export function PatientList() {
  const [patients, setPatients] = useState([]);
  const isFocused = useIsFocused();

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
  }, [isFocused]);
  const navigation = useNavigation();

  function handlePatientDetails(item: any) {
    navigation.navigate('patientDetails', item);
  }

  return (
    <View>
      <Header title="Meus Pacientes"/>
      <>
        <View style={styles.containerSearch}>
            <TextInput
                style={styles.inputSearch}
                placeholder="Busque pelo nome ou sobrenome"
            />
            <AntDesign style={styles.iconSearch} name="search1" size={24} />
        </View>
        <FlatList
          data={patients}
          renderItem={({item}:any) => (
            <View style={styles.containerList}>
              <TouchableOpacity style={styles.containerPatient} onPress={() => handlePatientDetails(item)}>
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
