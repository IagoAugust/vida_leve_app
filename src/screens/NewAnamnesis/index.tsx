import React, {useEffect, useState} from "react";
import {Alert, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {Header} from "../../components/Header";
import Input from "../../components/Input";
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

type Question = {
  fieldId: string;
  id: string;
  question: string;
}

type Questions = Array<Question>

type Answers = {
  [key: string]: string
};

type Anamnesis = {
  name: string;
  fieldId: string;
  patientId: string;
  answers: Answers;
}

export function NewAnamnesis({route}: any) {
  const [pickerArea, setPickerArea] = useState('');
  const [questionValues, setQuestionValues] = useState<Answers>({});
  const [questions, setQuestions] = useState<Questions>([]);

  const patientIdx = route.params.patientId;
  const fieldIdx = route.params.fieldId;
  const {fieldName} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    firestore()
      .collection('questions')
      .where('fieldId', '==', fieldIdx)
      .get()
      .then((response) => {
        const data: Array<any> = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        // @ts-ignore
        setQuestions(data);
      })
      .catch((error) => {
        alert('Houve um erro carregando a lista de perguntas');
        console.log(error);
      });
  },[])

  const handleQuestionValueChange = (question: string, value: string) => {
    setQuestionValues((prevQuestionValues) => ({
      ...prevQuestionValues,
      [question]: value,
    }));
  };

  const handleSendValues = () => {
    let data = new Date();
    let dd = String(data.getDate()).padStart(2, '0');
    let mm = String(data.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = data.getFullYear();
    let today = dd + '/' + mm + '/' + yyyy;

    let anamnese: Anamnesis = {
      name: `${fieldName} - ${today}`,
      fieldId: fieldIdx,
      patientId: patientIdx,
      answers: questionValues
    };

    firestore()
      .collection('anamnesis')
      .add(anamnese)
      .then(() => Alert.alert(
      'Sucesso',
      'Novo anamnese criada com sucesso!',
      [
        {
          text: 'Confirma',
          // @ts-ignore
          onPress: () => navigation.pop(2)
        }
      ]
    )).catch((error) => console.log(error));
  };


  return (
    <View style={styles.container}>
      <Header title="Nova Anamnese" />
      <ScrollView>

        <>
          {questions.map((question, index) => (
            <Input
              key={index}
              label={question['question']}
              value={questionValues[question['id']] || ''}
              onChangeText={(answ) => handleQuestionValueChange(question['id'], answ)}
            />
          ))}
          <TouchableOpacity style={styles.button} onPress={handleSendValues}>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </>
      </ScrollView>
    </View>
  );
}
