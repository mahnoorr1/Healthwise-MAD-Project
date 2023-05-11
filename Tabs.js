import { DashboardDrDiscovery } from './DiscoverDoctor/DashboardDrDiscovery';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ChooseGender } from './Diet Planner/ChooseGender';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ManageAppointment, { ManageAppointments } from './screens/manageAppointments/manage';
import Profile from './screens/profiling/Profile'

const Tab = createBottomTabNavigator();

const CustomButton = ({ focused,onPress}) => (
    <TouchableOpacity
        style ={{
            top : -30,
            alignItems : 'center',
            justifyContent : 'center',
        }}
        onPress = { onPress}
    >
        <View
            style = {{
                width : 65,
                height : 65,
                borderRadius : 35,
                backgroundColor :'#D3F36B'
            }}
        >
          <Ionicons 
            name="grid-outline" 
            style = {{
              fontSize:35,
              marginLeft:15,
              marginTop:13,
              
            }}
            
                    />
        </View>
    </TouchableOpacity>
)


const ProfileScreen = () => {
    return(
        <View>
            <Text>
               Hy
            </Text>
        </View>
    )
  }
  
  const AccountScreen = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity  onPress={navigation.navigate("Profile")}/>
        </View>
    )
  }
export const Tabs = ({navigation})=> {
    return(
      <Tab.Navigator 
        screenOptions = {{ 
          headerShown: false,
          tabBarShowLabel : false,
         }}
      >
        <Tab.Screen 
          name = "Appointments" 
          component={ManageAppointments}
          options = {{
            tabBarIcon : ({focused}) => (
              <View 
                style = {{ 
                  alignItems : 'center' ,
                  justifyContent : 'center',
                        }}  >
                <Ionicons 
                  name="calendar-outline" 
                  style = {{
                    fontSize:25,
                    
                  }}
                  color = {focused ? 'black' : 'grey'} 
                />
              </View>
            )
          }}
          />
        <Tab.Screen 
          name="Diet Planner" 
          component={ChooseGender}
          options = {{
            tabBarIcon : ({focused}) => (
              <View 
                style = {{ 
                  alignItems : 'center' ,
                  justifyContent : 'center',
                        }}  >
                <Ionicons 
                    name="clipboard-outline" 
                    style = {{
                      fontSize:25,
                    }}
                    color = {focused ? 'black' : 'grey'}
                  />
              </View>
            )
          }} />
        <Tab.Screen 
            name="Discover" 
            component={DashboardDrDiscovery}
            options = {{
                /*tabBarIcon : ({focused}) => (
                  <View>
                    <Ionicons 
                      name="clipboard" 
                      style = {{
                        fontSize:35
                    }}
                    />
                  </View>
                ),*/
                tabBarButton : (props) => (
                    <CustomButton {...props} />
                )
            }} />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options = {{
            tabBarIcon : ({focused}) => (
              <View 
                style = {{ 
                  alignItems : 'center' ,
                  justifyContent : 'center',
                        }}  >
                <Ionicons 
                  name="people-outline" 
                  style = {{
                    fontSize:25,
                  }}
                  color = {focused ? 'black' : 'grey'}
                />
              </View>
            )
          }} />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options = {{
            tabBarIcon : ({focused}) => (
              <View 
                style = {{ 
                  alignItems : 'center' ,
                  justifyContent : 'center',
                        }}  >
                
                <Ionicons 
                  name="person-outline" 
                  style = {{
                    fontSize:25,
                  }}
                  color = {focused ? 'black' : 'grey'}
                />
                
              </View>
            )
          }} />
      </Tab.Navigator>
    )
  }
