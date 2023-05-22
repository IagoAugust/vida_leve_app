import React from "react";
import {ScrollView, View, TextInput, FlatList, Text, TouchableOpacity} from "react-native";
import {Header} from "../../components/Header";
import {AntDesign} from '@expo/vector-icons';
import {styles} from "./styles";
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const patients = [
  {
    id: 1,
    name: 'Iago',
  },
  {
    id: 2,
    name: 'Otto',
  },
  {
    id: 3,
    name: 'Diogo',
  }
  ,
  {
    id: 4,
    name: 'Otto',
  },
  {
    id: 5,
    name: 'Diogo',
  },
  {
    id: 6,
    name: 'Otto',
  },
  {
    id: 7,
    name: 'Diogo',
  }
  ,
  {
    id: 8,
    name: 'Otto',
  },
  {
    id: 9,
    name: 'Diogo',
  },
  {
    id: 10,
    name: 'Otto',
  },
  {
    id: 11,
    name: 'Diogo',
  }

];

type detailsPatientType = {
  id: number
  name: string
}

export function ListPatients() {
  const navigation = useNavigation();

  function handleDetailsPatient(patient: detailsPatientType) {
    navigation.navigate('detailsPatient', {name: patient.name, id: patient.id});
  }

  return (
    <View>
      <Header title="Meus Pacientes"/>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquise o paciente"
        />
        <AntDesign style={styles.iconSearch} name="search1" size={25}/>
      </View>
        <FlatList
          data={patients}
          renderItem={({item}) => (

            <TouchableOpacity style={styles.containerPatient} onPress={() => handleDetailsPatient(item)}>
              <Ionicons name="person" size={30} color="black"/>
              <Text style={styles.patientText}>{item.name}</Text>
            </TouchableOpacity>

          )}
        />
    </View>
  )
}
