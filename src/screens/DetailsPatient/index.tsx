import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { Avatar } from "@react-native-material/core";
import { styles } from "./styles";
import Input from "../../components/Input";

export function DetailsPatient({ route }: any) {
  const { id,name, email, gender, phone, age, cpf, rg} = route.params;

  const firstName =  name.split(' ')[0]

  return (
    <View>
      <Header title={firstName}/>
      <Avatar 
        style={styles.iconImage}
        image={{uri: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png'}}
        size={200}
      />
      <Input 
        label="Nome Completo"
        value={name}
        editable={false}
      />

        <Input 
            label="Email"
            value={name}
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

      
    </View>
  );
}
