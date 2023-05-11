import {TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import  Entypo  from 'react-native-vector-icons/Entypo'; 




export default function App() {
  return (
    <View style={styles.header}>
    <Text style={{color: 'white', textAlign: 'center', paddingTop: 30, fontSize: 30,fontWeight: '500'}}> Invite Friends</Text>
      <View style={styles.main_heading}>
      </View>


      <View> 
       <Text style={{paddingTop: 120,paddingLeft:150}}>
      <Entypo name="emoji-sad" size={40} color="black" />
      </Text>
      <Text style={{textAlign: 'center', paddingTop :30}}>
       You dont have friends added yet.Just add your first friend to get started 
      </Text>

      <Text style={{paddingTop: 80}}>
      </Text>
       <TouchableOpacity onPress={() => navigation.navigate('Card1')}
       style={{marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#28282B',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#fff',
   }}>
    <Text style={{
        color: '#fff',
        textAlign: 'center',
        fontWeight:'bold'
        }}>ADD FRIENDS</Text>
</TouchableOpacity>
      
      
      
     
      </View>
    </View>

  
  );
}

const styles = StyleSheet.create({
    header: {
        height: '18%', 
        width: '100%', 
        backgroundColor: '#24282C',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
  main_heading: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
});
