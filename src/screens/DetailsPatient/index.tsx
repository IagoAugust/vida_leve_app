import React from "react";
import { View, Text } from "react-native";

export function DetailsPatient({ route }) {
  const { name, id } = route.params;

  return (
    <View>
      <Text>Nome do paciente: {name}</Text>
      <Text>ID do paciente: {id}</Text>
    </View>
  );
}
