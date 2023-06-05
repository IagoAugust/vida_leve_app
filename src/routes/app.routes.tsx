import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {Home} from '../screens/Home';
import {NewPatient} from '../screens/NewPatient';
import { Calendar } from '../screens/Calendar';
import { PatientList } from '../screens/PatientList';
import { PatientDetails } from '../screens/PatientDetails';
import { AnamnesisDetails } from '../screens/AnamnesisDetails';
import { NewAnamnesis } from '../screens/NewAnamnesis';
import SignupRoutine from '../screens/SignupRoutine';
import FieldSelection from '../screens/FieldSelection';


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
      <Screen name='login' component={Login} />
      <Screen name='signupRoutine' component={SignupRoutine} />
      <Screen name='home' component={Home} />
      <Screen name='newPatient' component={NewPatient} />
      <Screen name='calendar' component={Calendar} />
      <Screen name='patientList' component={PatientList} />
      <Screen name='patientDetails' component={PatientDetails} initialParams={{id: ''}}/>
      <Screen name='anamnesisDetails' component={AnamnesisDetails} />
      <Screen name='newAnamnesis' component={NewAnamnesis}  initialParams={{patientId: '', fieldId: ''}}/>
      <Screen name='fieldSelection' component={FieldSelection} initialParams={{id: ''}}/>
    </Navigator>
  )
}
