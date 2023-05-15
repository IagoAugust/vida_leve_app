import React from "react";
import { ScrollView, View, TextInput, FlatList, Text, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header";
// import { Icon, TextInput } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';

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
];

export function ListPatients() {
    return (
        <View>
            <Header title="Meus Pacientes" />
            <ScrollView>
                <View style={styles.containerSearch}>
                    <TextInput 
                        style={styles.inputSearch}
                        placeholder="Pesquise o paciente"
                    />
                    <AntDesign style={styles.iconSearch} name="search1" size={25} />
                </View>
                <FlatList 
                    data={patients}
                    // renderItem={({item}) => <Text style={styles.patientItem}>{item.name}</Text>}  
                    renderItem={({item}) => (
                        <View style={styles.containerList}>
                            <TouchableOpacity style={styles.containerPatient}>
                                <Ionicons name="person" size={30} color="black" />
                                <Text style={styles.patientText}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}  
                />
            </ScrollView>

        </View>
    )
}