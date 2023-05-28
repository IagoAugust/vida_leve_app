import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    picker:{
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 20,
        margin: 10,
        borderRadius: 8,
        marginTop: 5,
        textAlign: 'center',
        justifyContent:'center'
    },
    textPicker: {
        marginTop: 10,
        marginStart: 20,
        fontSize: 18,
    },
    button:{
        backgroundColor: '#fff',
        width: 79,
        height: 40,
        
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#79747E',
        
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    
        marginEnd: 20,
        marginTop: 40,
        marginBottom:120,
    },
}) 

