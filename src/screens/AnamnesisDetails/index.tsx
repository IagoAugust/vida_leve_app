import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import Input from "../../components/Input";

export function AnamnesisDetails({ route }: any) {
    const { id, name } = route.params;
 
    return (
        <View style={styles.container} >
            <Header title='Anamnese' />
            <ScrollView>
                <Text style={styles.title}>Ficha da {name}</Text>
                <Input 
                    label="Campo"
                    value="Nutrição" // Puxar do Firebase os Campos
                    editable={false}
                />
            </ScrollView>
        </View>
    );
}