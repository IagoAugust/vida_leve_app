import React, {useEffect, useState} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Header} from "../../components/Header";
import {styles} from "./styles";
import Input from "../../components/Input";
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

type Answers = {
  [key: string]: string
};

type Anamnesis = {
  id: string
  name: string;
  fieldId: string;
  patientId: string;
  answers: Answers;
}

type Question = {
  fieldId: string;
  id: string;
  question: string;
}

type Questions = Array<Question>

export function AnamnesisDetails({route:{params}}: { route: { params: Anamnesis }}) {
  const [questionValues, setQuestionValues] = useState<Answers>({});
  const [questions, setQuestions] = useState<Questions>([]);
  const navigation = useNavigation();


  useEffect(() => {
    setQuestionValues(params.answers);
    firestore()
      .collection('questions')
      .where('fieldId', '==', params.fieldId)
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

  return (
    <View style={styles.container}>
      <Header title='Anamnese'/>
      <ScrollView>
        <Text style={styles.title}>Ficha de {params.name}</Text>
        <>
          {questions.map((question, index) => (
            <Input
              key={index}
              label={question['question']}
              value={questionValues[question['id']] || ''}
              editable={false}
            />
          ))}
        </>
      </ScrollView>
    </View>
  );
}
