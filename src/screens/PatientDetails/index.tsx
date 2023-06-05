import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, ScrollView, Modal, SafeAreaView, Alert} from "react-native";
import { Header } from "../../components/Header";
import { Avatar, Icon, IconButton } from "@react-native-material/core";
import { styles } from "./styles";
import Input from "../../components/Input";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useIsFocused, useNavigation} from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';

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
export function PatientDetails({ route }: any) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [gender, setGender] = useState('');
  const [settingModal, setSettingModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [anamnesis, setAnamnesis] = useState<Array<Anamnesis>>([])
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const idx = route.params.id;

  useEffect(() => {
    firestore()
      .collection('patients')
      .doc(idx)
      .get()
      .then((response) => {
        const result = response.data();
        setName(result?.['name']);
        setAge(result?.['age']);
        setEmail(result?.['email']);
        setCpf(result?.['cpf']);
        setGender(result?.['gender']);
        setPhone(result?.['phone']);
        setRg(result?.['rg']);
      })
      .catch((error) => {
        alert('Houve um erro ao buscar dados do paciente');
        console.log(error);
      })
  }, [isFocused]);

  useEffect(() => {
    firestore()
      .collection('anamnesis')
      .where('patientId', '==', idx)
      .get()
      .then((response) => {
        const data: Array<any> = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        // @ts-ignore
        setAnamnesis(data)
      })
      .catch((error) => {
        alert('Houve um erro carregando a lista de anamneses');
        console.log(error);
      })
  }, [isFocused]);



  function handleAnamnesisDetails(item: Anamnesis) {
    navigation.navigate('anamnesisDetails', (item))
  }

  function handleNewAnamnesis(id: string) {
    navigation.navigate('fieldSelection', ({id}))
  }

  function handleSubmit(){
    firestore()
      .collection('patients')
      .doc(idx)
      .update({
        name,
        age,
        email,
        phone,
        cpf,
        rg,
        gender,
      }).then(() => Alert.alert(
      'Sucesso',
      'Paciente atualizado com sucesso!',
      [
        {
          text: 'Confirma',
          onPress: () => setEditable(false)
        }
      ]
    )).catch((error) => console.log(error));
  }

  function handleDeletePatient() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse paciente e suas anamneses??',
      [
        {
          text: 'Confirma',
          onPress: () => {
            firestore()
              .collection('patients')
              .doc(idx)
              .delete()
              .then(() => Alert.alert(
                'Sucecsso',
                'Paciente deletado com sucesso!',
                [
                  {
                    text: 'Confirma',
                    onPress: () => navigation.goBack()
                  }
                ]
              )).catch((error) => console.log(error));
          }
        },
        {
          text: 'Cancela',
          onPress: () => setSettingModal(false)
        }
      ]
    )
  }


  return (
    <View style={styles.container}>
      <Header title={''} />
      <ScrollView>
        <TouchableOpacity style={styles.settingButton} onPress={() => setSettingModal(true)}>
          <AntDesign name="setting" size={35} color="black" />
        </TouchableOpacity>
        <Modal visible={settingModal} animationType='slide' transparent={true} onRequestClose={() => setSettingModal(false)}>
          <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.settingBackground} onPress={() => setSettingModal(false)} />
            <View style={styles.settingFooter}>
              <TouchableOpacity
                style={styles.settingItem}
                onPress={() => {
                  setEditable(true)
                  setSettingModal(false)
                }}
              >
                <Text>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingDelete} onPress={handleDeletePatient}>
                <Text>Apagar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem} onPress={() => setSettingModal(false)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
        <Avatar
          style={styles.iconImage}
          image={{ uri: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png' }}
          size={200}
        />
        <Input
          label="Nome Completo"
          value={name}
          editable={editable}
          onChangeText={setName}
        />

        <Input
          label="Email"
          value={email}
          editable={editable}
          onChangeText={setEmail}
        />

        <Input
          label="Idade"
          value={String(age)}
          editable={editable}
          onChangeText={value => setAge(Number(value))}
        />

        <Input
          label="Gênero"
          value={gender}
          editable={editable}
          onChangeText={setGender}
        />

        <Input
          label="Telefone"
          value={String(phone)}
          editable={editable}
          onChangeText={setPhone}
        />

        <Input
          label="CPF"
          value={String(cpf)}
          editable={editable}
          onChangeText={setCpf}
        />

        <Input
          label="RG"
          value={String(rg)}
          editable={editable}
          onChangeText={setRg}
        />

        {!editable && (
          <View style={styles.anamnesisContainer}>
            {anamnesis.map((item) => (
              <TouchableOpacity key={item.id} style={styles.anamnesisItem} onPress={() => handleAnamnesisDetails(item)} >
                <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="black" style={styles.anamnesisIcon} />
                <Text>{item.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {editable && (
          <View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text>Confirmar Alterações </Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
      {!editable && (
        <TouchableOpacity style={styles.editContainer} onPress={() => handleNewAnamnesis(idx)}>
          <AntDesign name="edit" size={30} color="#21005D" />
        </TouchableOpacity>)}
    </View>
  );
}
