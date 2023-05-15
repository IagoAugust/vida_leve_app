import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    
    inputSearch: {
        width: '90%',
        height: 50,
        marginTop: 50,
        paddingLeft: 14,
        justifyContent: 'center',
        alignSelf: 'center',

        borderRadius: 15,
        borderWidth: 1.5, 
        borderColor: 'gray',

        backgroundColor: '#F4F4F4',

    },
    iconSearch: {
        marginTop: 63,
        marginLeft: -40,
    },

    containerList : {
        width: '90%',
        backgroundColor: '#DBDBDB',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 5,
    },

    containerPatient : {
        width: '90%',
        height:56,
        backgroundColor: '#fff',
        
        flexDirection: 'row',
        alignSelf:'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingLeft: 15,

        borderWidth: 1,
        borderColor: '#3d3d3d',
        borderRadius: 7,


    },

    patientText: {
        paddingLeft: 15,
        fontSize: 18,
    }
})