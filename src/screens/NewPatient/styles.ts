import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cameraButton: {
    width: 140,
    height: 140,
    marginTop: 35,
    marginBottom: 20,

    backgroundColor: '#b9b9b9',
    borderRadius: 70,
    borderWidth: 1.5,
    borderColor: '#C0C0C0',
    
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center'
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
  }
})
