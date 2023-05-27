import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Modal, SafeAreaView } from "react-native";
import { Header } from "../../components/Header";
import { Avatar, Icon, IconButton } from "@react-native-material/core";
import { styles } from "./styles";
import Input from "../../components/Input";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function DetailsPatient({ route }: any) {

  const [settingModal, setSettingModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editable, setEditable] = useState(false);

  const navigation = useNavigation();

  const { id, name, email, gender, phone, age, cpf, rg } = route.params;

  const firstName = name.split(' ')[0]

  const anamnesis = [
    {
      id: 1,
      name: 'Anamnese - 20/05/2023'
    },
    {
      id: 2,
      name: 'Anamnese - 19/05/2023'
    },
    {
      id: 3,
      name: 'Anamnese - 15/05/2023'
    },
  ]

  function handleAnamnesisDetails({ id, name }: any) {
    navigation.navigate('anamnesisDetails', {
      id,
      name,
    })
  }

  function handleNewAnamnesis() {
    navigation.navigate('newAnamnesis')
  }

  // function handleSubmit(){
      // colocar o código para mudar o banco de dados (firebase)
  // }


  return (
    <View style={styles.container}>
      <Header title={firstName} />
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
              <TouchableOpacity style={styles.settingDelete} onPress={() => {setSettingModal(false); setConfirmDelete(true)}}>
                <Text>Apagar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingItem} onPress={() => setSettingModal(false)}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal visible={confirmDelete} animationType="slide" transparent={true} onRequestClose={() => setConfirmDelete(false)}>
          <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.settingBackground} onPress={() => setConfirmDelete(false)} />
            <View style={styles.confirmDelete}>
                <Text style={styles.textConfirmDelete}>Deseja realmente excluir esse pacientes?</Text>
                <TouchableOpacity style={styles.settingDelete} onPress={() => {}}><Text>Confirmar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => setConfirmDelete(false)}><Text>Cancelar</Text></TouchableOpacity>
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
        />

        <Input
          label="Email"
          value={email}
          editable={editable}
        />

        <Input
          label="Idade"
          value={String(age)}
          editable={editable}
        />

        <Input
          label="Gênero"
          value={gender}
          editable={editable}
        />

        <Input
          label="Telefone"
          value={String(phone)}
          editable={editable}
        />

        <Input
          label="CPF"
          value={String(cpf)}
          editable={editable}
        />

        <Input
          label="RG"
          value={String(rg)}
          editable={editable}
        />

        {editable == false && (
          <View style={styles.anamnesisContainer}>
            {anamnesis.map((item) => (
              <TouchableOpacity key={item.id} style={styles.anamnesisItem} onPress={() => handleAnamnesisDetails(item)} >
                <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="black" style={styles.anamnesisIcon} />
                <Text>{item.name} </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {editable == true && (
          <View>
            <TouchableOpacity style={styles.button} onPress={() => { setEditable(false) }}>
              <Text>Confirmar Alterações </Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
      {editable == false && (
        <TouchableOpacity style={styles.editContainer} onPress={handleNewAnamnesis}>
          <AntDesign name="edit" size={30} color="#21005D" />
        </TouchableOpacity>)}
    </View>
  );
}
