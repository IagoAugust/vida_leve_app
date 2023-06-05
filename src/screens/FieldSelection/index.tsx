import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../NewAnamnesis/styles';
import {Header} from '../../components/Header';
import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';


type Field = {
  id: string;
  name: string;
  field: string;
}

type Fields = Array<Field>;

export default function FieldSelection({route}: any) {
  const [selectedValue, setSelectedValue] = useState('');
  const [fields, setFields] = useState<Fields>([]);
  const navigation = useNavigation();

  const patientIdx = route.params.id;

  useEffect(() => {
    firestore()
      .collection('fieldType')
      .get()
      .then((response) => {
        const data: Array<any> = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        // @ts-ignore
        setFields(data);
      })
      .catch((error) => {
        alert('Houve um erro carregando a lista de Áreas');
        console.log(error);
      })
  }, []);

  function handleNextScreen(patientId:any, area: string ) {
    const  index = fields.findIndex((field:any) => {
      return field.name === area;
    })
    const fieldId = fields[index].id;
    const fieldName = fields[index].field;
    navigation.navigate('newAnamnesis', ({patientId, fieldId, fieldName}));
  }

  return (
    <View style={styles.container}>
      <Header title="Nova Anamnese" />
      <Text style={styles.textPicker}>Campo</Text>
      <View style={styles.picker}>
        <Picker selectedValue={selectedValue} onValueChange={setSelectedValue}>
          <Picker.Item label="Selecione o tipo de área " value="" enabled={true} />
          {fields.map(el => (
            <Picker.Item key={el?.['id']} label={el?.['field']} value={el?.['name']} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleNextScreen(patientIdx, selectedValue)}>
        <Text>Avançar</Text>
      </TouchableOpacity>
    </View>
  )
}
