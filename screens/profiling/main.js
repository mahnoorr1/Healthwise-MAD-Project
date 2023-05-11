import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile'
import Contact from './Contact'
import Term from './Term'
import Privacy_Policy from './Privacy_Policy'
import FAQ from './FAQ'
import Invite_Friends from './Invite_Friends'
import Card from './Card';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Term" component={Term} />
        <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Invite_Friends" component={Invite_Friends} />
        <Stack.Screen name="Card" component={Card} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


