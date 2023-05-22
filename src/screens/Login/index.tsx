import {Image, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './styles'
import {AntDesign as Icon} from '@expo/vector-icons'
import {Spacer} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('signupRoutine');
  }

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const userSignIn = auth().signInWithCredential(googleCredential);
    userSignIn.then((user) => {
      console.log(JSON.stringify(user, null, 2));
      navigation.navigate('signupRoutine');
    }).catch((error) => {
      console.log(error)
    });
  }

  async function signOut() {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  let logoutButton = (<>
    <TouchableOpacity onPress={signOut} style={{backgroundColor: '#f03c3f',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 24,
      height: 36,
      width: '100%',
      borderColor: '#ffffff',
      borderWidth: 2,
      borderRadius: 20, }}><Text style={{fontWeight: 'bold', color: 'white'}}>Sair</Text></TouchableOpacity>
  </>)

  let nextScreen = (<>
    <TouchableOpacity onPress={handleLogin} style={{backgroundColor: '#93db53',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 24,
      height: 36,
      width: '100%',
      borderColor: '#ffffff',
      borderWidth: 2,
      borderRadius: 20, }}><Text style={{fontWeight: 'bold', color: 'white'}}>Proxima tela</Text></TouchableOpacity>
  </>)

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/VidaLeve1.png')} style={styles.logo}/>
      <Text style={styles.title}>
        Vida Leve
      </Text>

      <Text style={styles.subtitle}>
        Um produto da Escola de Saúde e Bem-Estar
      </Text>
      <Spacer />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onGoogleButtonPress}
      >
        <Icon name='google' size={18} color={'#1C1B1F'}/>
        <Text style={styles.buttonText}>
          Login com Google
        </Text>
      </TouchableOpacity>

      <Text style={styles.loginInfo} >
        Cadastre-se com sua conta google da unifeob.
      </Text>
      {user ? (logoutButton) : (nextScreen) }
    </View>
  );
}
