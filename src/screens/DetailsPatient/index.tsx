import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { Avatar, Icon, IconButton } from "@react-native-material/core";
import { styles } from "./styles";
import Input from "../../components/Input";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export function DetailsPatient({ route }: any) {
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


  return (
    <View style={styles.container}>
      <Header title={firstName} />
      <ScrollView>
        <TouchableOpacity style={styles.settingButton}>
          <AntDesign name="setting" size={35} color="black" />
        </TouchableOpacity>
        <Avatar
          style={styles.iconImage}
          image={{ uri: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png' }}
          size={200}
        />
        <Input
          label="Nome Completo"
          value={name}
          editable={false}
        />

        <Input
          label="Email"
          value={email}
          editable={false}
        />

        <Input
          label="Idade"
          value={String(age)}
          editable={false}
        />

        <Input
          label="Gênero"
          value={gender}
          editable={false}
        />

        <Input
          label="Telefone"
          value={String(phone)}
          editable={false}
        />

        <Input
          label="CPF"
          value={String(cpf)}
          editable={false}
        />

        <Input
          label="RG"
          value={String(rg)}
          editable={false}
        />

        <View style={styles.anamnesisContainer}>
          {anamnesis.map((item) => (
            <View key={item.id} style={styles.anamnesisItem}>
              <MaterialCommunityIcons name="clipboard-check-outline" size={28} color="black" style={styles.anamnesisIcon} />
              <Text>{item.name} </Text>
            </View>
          ))}
        </View>

      </ScrollView>
      <TouchableOpacity style={styles.editContainer}>
          <AntDesign name="edit" size={30} color="#21005D" />
      </TouchableOpacity>
    </View>
  );
}
