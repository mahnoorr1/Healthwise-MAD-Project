
import { TouchableOpacity,Image,Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Entypo from 'react-native-vector-icons/Entypo'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome'; 
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';


export default function Profile({navigation}) {
  return (
    <View style={{marginTop:20}}>
    <View style={{flexDirection:'row'  }}>
     <Image
          style={{marginLeft:10 , width: 70,
    height: 70,borderRadius:400/8}}
          source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}
        />
        <View>
        <Text style={{marginLeft:20,fontWeight:1000,marginTop:5}}>Khezar Mahmood</Text>
         <Text style={{marginLeft:20}}>khezarmahmood4@gmail.com</Text>
          <Text style={{marginLeft:20}}>Pakistan</Text>
</View>

        </View>
       
<TouchableOpacity   onPress={() => navigation.navigate('Contact')}>      
<View style={{flexDirection:'row', marginTop:80 , justifyContent:'space-around', }}>
<Ionicons  name="notifications" size={24} color="black" /> 
<Text style={{marginRight:190}}> Contact us</Text>
<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
</View >   
</TouchableOpacity> 


  <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>      
 <View style={{flexDirection:'row', marginTop:20 , justifyContent:'space-around' }}>

 <Entypo name="lock" size={24} color="black" /> 
 
<Text style={{marginRight:230}}> FAQ </Text>

<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
 </View >   
 </TouchableOpacity>   


<TouchableOpacity   onPress={() => navigation.navigate('Term')}>      
 <View style={{flexDirection:'row', marginTop:20 , justifyContent:'space-around' }}>
 <FontAwesome name="eye" size={24} color="black" /> 
<Text style={{marginRight:140}}>Terms & Conditions</Text>
<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
 </View >   
 </TouchableOpacity> 


  <TouchableOpacity  onPress={() => navigation.navigate('Privacy_Policy')}>      
 <View style={{flexDirection:'row', marginTop:20 , justifyContent:'space-around' }}>

 <Entypo name="help-with-circle" size={24} color="black" />
 
<Text style={{marginRight:190}}> Privacy Policy</Text>

<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
 </View >   
 </TouchableOpacity>   


  <TouchableOpacity onPress={() => navigation.navigate('Invite_Friends')}>      
 <View style={{flexDirection:'row', marginTop:20 , justifyContent:'space-around' }}>

 <FontAwesome5 name="user-friends" size={20} color="black" />
 
<Text style={{marginRight:190}}>Invite Friends</Text>

<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
 </View >   
 </TouchableOpacity>   


  <TouchableOpacity>      
 <View style={{flexDirection:'row', marginTop:20 , justifyContent:'space-around' }}>
<Entypo name="log-out" size={24} color="black" />
 
<Text style={{marginRight:230}}>Logout</Text>

<MaterialIcons style={{}}name="arrow-forward-ios" size={15} color="black" />
 </View >   
 </TouchableOpacity>   
    
   
     
    </View>
  );
}


