import {Text, View} from 'react-native';
import { AppBar, IconButton,  TextInput, Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function SignupRoutine() {
  const navigation = useNavigation();
  function handleButtonPress() {
    navigation.navigate('home');
  }

  return(
    <View>
      <AppBar
        color='#82B3C9'
        title="Confirmação de Cadastro"
        centerTitle={true}
        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
        )}
      />
      <View style={styles.container}>
        <View style={styles.formBlock}>
          <Text style={styles.info}>
            Complete seu cadastro com informações adicionais
          </Text>
          <TextInput
            label='Curso'
            variant='outlined'
            style={styles.input}
          />
          <TextInput
            label='Semestre'
            variant='outlined'
            keyboardType='numeric'
            style={styles.input}
          />
        </View>
        <Button title='Enviar' variant='outlined' color='#FFF' style={styles.confirm} onPress={handleButtonPress}/>
      </View>
    </View>
  )
}
