import React from "react";
import { ScrollView, View, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type detailsPatientType = {
    name: string;
        id: number;
        email: string;
        age: number; 
        gender: string;
        phone: number;
        cpf: number;
        rg: number
}

export function ListPatients() {
    const navigation = useNavigation();

    const patients = [
        {
            id: 1,
            name: 'Iago Matheus',
            email: 'iagomateus@gamil.com',
            phone: 19345659345,
            gender: 'Masculino',
            age: 20,
            cpf: 25635869802,
            rg: 51687946,
        },
        {
            id: 2,
            name: 'Otto Spreng',
            email: 'pttpspreng@gmail.com',
            phone: 19456794570,
            gender: 'Masculino',
            age: 29,
            cpf: 35268469856,
            rg: 15587156,
        },
        {
            id: 3,
            name: 'Diogo Batista',
            email: 'diogobatista@gmail.com',
            phone: 19485697643,
            gender: 'Masculino',
            age: 21,
            cpf: 23558636815,
            rg: 32165478,
            
        }
    ];

    function handleDetailsPatient({ id, name, email, gender, phone, age, cpf, rg  }: detailsPatientType) {
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
            <Header title="Meus Pacientes" />
            <>
                <View style={styles.containerSearch}>
                    <TextInput 
                        style={styles.inputSearch}
                        placeholder="Pesquise o paciente"
                    />
                    <AntDesign style={styles.iconSearch} name="search1" size={25} />
                </View>
                <FlatList 
                    data={patients}  
                    renderItem={({item}) => (
                        <View style={styles.containerList}>
                            <TouchableOpacity style={styles.containerPatient} onPress={() => handleDetailsPatient(item)}  >
                                <Ionicons name="person" size={30} color="black" />
                                <Text style={styles.patientText}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}  
                />
            </>
        </View>
    )
}
