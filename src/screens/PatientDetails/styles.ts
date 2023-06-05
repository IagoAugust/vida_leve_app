import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    settingButton: {
        alignSelf:'flex-end',
        marginRight:15,
        marginTop:10
    },
    settingBackground: {
        flex:1,
        backgroundColor: '#C1C1C16a',   
    },
    settingFooter: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
    },
    settingItem: {
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 9,

        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#79747E',

    },
    settingDelete: {
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 9,

        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#ED4F4F',

    },
    iconImage: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: 25,
    },
    anamnesisContainer: {
        backgroundColor: '#E1EBF3',
        paddingVertical: 20,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        flex:1,
    },
    confirmDelete: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 10,
        marginBottom: '65%'
    },
    textConfirmDelete: {
        fontSize: 20,
        marginVertical: 20,
    },
    anamnesisItem: {
        height: 56,
        marginHorizontal: 15,
        marginVertical: 15,
        paddingLeft: 20,
        backgroundColor: '#fff',

        flexDirection: 'row',
        alignItems: 'center',
    },
    editContainer: {
        position: 'absolute',
        bottom: 23,
        right: 23,
        height: 56,
        width: 56,
        borderRadius: 20,
        backgroundColor: '#B3E5FC',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
      },
    anamnesisIcon:{
        marginRight: 20,
    },
    button:{
        backgroundColor: '#fff',
        width: '30%',
        height: 40,
        
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#79747E',
        
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    
        marginEnd: 20,
        marginTop: 40,
        marginBottom:40,
        paddingHorizontal: 5,
      },
      
});