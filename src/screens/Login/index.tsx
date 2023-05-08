import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles'
// import  from '@react-native-material/core';
import {AntDesign as Icon} from '@expo/vector-icons'
import {Spacer} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/VidaLeve1.png')} style={styles.logo}/>
      <Text style={styles.title}>
        Vida Leve
      </Text>

      <Text style={styles.subtitle}>
        Um produto da Escola de Saúde e Bem-estar
      </Text>
      <Spacer />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Icon name='google' size={18} color={'#1C1B1F'}/>
        <Text style={styles.buttonText}>
          Login com Google
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginInfo} >
        Cadastre-se com sua conta google da unifeob.
      </Text>
    </View>
  );
}
