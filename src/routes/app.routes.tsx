import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {Home} from '../screens/Home';
import {NewPatient} from '../screens/NewPatient';
import { Calendar } from '../screens/Calendar';
import { ListPatients } from '../screens/ListPatients';
import { DetailsPatient } from '../screens/DetailsPatient';
import SignupRoutine from '../screens/SignupRoutine';


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
      <Screen name='login' component={Login} />
      <Screen name='signupRoutine' component={SignupRoutine} />
      <Screen name='home' component={Home} />
      <Screen name='newPatient' component={NewPatient} />
      <Screen name='calendar' component={Calendar} />
      <Screen name='listPatients' component={ListPatients} />
      <Screen name='detailsPatient' component={DetailsPatient} initialParams={{name: '', id: 0}} />
    </Navigator>
  )
}
