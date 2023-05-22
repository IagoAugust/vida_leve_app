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
    }
      
});