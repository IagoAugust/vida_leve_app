import React, { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Picker } from "@react-native-picker/picker";
import Input from "../../components/Input";

export function NewAnamnesis() {
    const [pickerArea, setPickerArea] = useState('');
    const [questionValues, setQuestionValues] = useState<{ [key: string]: string }>({});

    const handlePickerChange = (currentCurrency: any) => {
        setPickerArea(currentCurrency);
    };

    const handleQuestionValueChange = (question: string, value: string) => {
        setQuestionValues((prevQuestionValues) => ({
            ...prevQuestionValues,
            [question]: value,
        }));
    };

    const handleSendValues = () => {
        // adicione o firebase aqui para enviar as perguntas
        console.log(questionValues);
    };

    const question = [
        { area: 'enfermagem', questions: ['Pressão Arterial', 'Frequência Cardíaca', 'Alergias', 'Queixa principal'] },
        { area: 'fisioterapia', questions: ['Pressão Arterial', 'Frequência Cardíaca', 'Possui alguma dor'] },
        { area: 'psicologia', questions: ['Atitude dos pais e familiares em relação à obesidade e à comida:', 'Identificação dos momentos do dia de maior ingestão, beliscos, voracidade alimentar: ', 'Investigação da síndrome da fome noturna: '] }
    ];

    const viewsInputs = (nameArea: string) => {
        const areaSelected = question.find((area) => area.area === nameArea);
        if (areaSelected) {
            return areaSelected.questions.map((question, index) => (
                <Input
                    key={index}
                    label={question}
                    value={questionValues[question] || ''}
                    onChangeText={(value) => handleQuestionValueChange(question, value)}
                />
            ));
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <Header title="Nova Anamnese" />
            <ScrollView>
                <Text style={styles.textPicker}>Campo</Text>
                <View style={styles.picker}>
                    <Picker selectedValue={pickerArea} onValueChange={handlePickerChange}>
                        <Picker.Item label="Selecione o tipo de área " value="" enabled={true} />
                        <Picker.Item label="Enfermagem" value="enfermagem" />
                        <Picker.Item label="Fisioterapia" value="fisioterapia" />
                        <Picker.Item label="Psicologia" value="psicologia" />
                        <Picker.Item label="Farmácia" value="Farmacia" />
                        <Picker.Item label="Edução Física" value="edfisica" />
                        <Picker.Item label="Nutrição" value="nutricao" />
                    </Picker>
                </View>
                {   
                    pickerArea !== '' && (
                        <>
                            {viewsInputs(pickerArea)}
                            <TouchableOpacity style={styles.button} onPress={handleSendValues}>
                                <Text>Enviar</Text>
                            </TouchableOpacity>
                        </>
                    )
                }
            </ScrollView>
        </View>
    );
}
