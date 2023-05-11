import { 
    View,
    Text, 
    ImageBackground,
    Image,
    TextInput,
    SafeAreaView, 
    TouchableOpacity
 } from "react-native";
import { useState } from "react";
import { dashboardStyling } from "./StyleSheet/dashboardStyling";
import {Manage} from "./manage";


export const DashboardDrDiscovery = ({navigation,route}) => {
    const [textInputValue,settextInputValue] = useState('')
    return(
        <SafeAreaView style = {dashboardStyling.container} >
            <View style = {dashboardStyling.topBar}>
                <ImageBackground 
                    source = {require('../Images/logo.png')} 
                    style = {dashboardStyling.logoStyle} >
                </ImageBackground>
                <Text style = {dashboardStyling.heading}>
                    HealthWise
                </Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("Chat")}
                >
                    <Image
                        style = {dashboardStyling.chatbutton}
                        source = {require('../Images/arr.png')} 
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    placeholder="Search Doctor"
                    style = {dashboardStyling.SearchBar}
                    placeholderTextColor="grey" 
                    keyboardType="default"
                    onChangeText={settextInputValue}
                    value={textInputValue}
                    onSubmitEditing={() => {
                        navigation.navigate('SearchSpecialistCard', {
                            value: textInputValue
                        });
                      }}
                />
            </View>
            <View style = {dashboardStyling.topBar}>
                <Text style = {dashboardStyling.specialDRText}>
                    Specialist Doctors
                </Text>
                <TouchableOpacity
                    onPress = { () => navigation.navigate("Spacialist")}
                >
                    <Text style = {dashboardStyling.seeAllText}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {dashboardStyling.cardsBlock}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Eye' })}
                >
                    <ImageBackground 
                        source = {require('../Images/eye.png')} 
                        style = {dashboardStyling.cards} >
                        <Text style = {dashboardStyling.insideCardText}>
                            40 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Cardio' })}
                >
                    <ImageBackground 
                        source = {require('../Images/cardio.png')} 
                        style = {dashboardStyling.cards} >
                        <Text style = {dashboardStyling.insideCardText}>
                            20 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Dental' })}
                >
                    <ImageBackground 
                        source = {require('../Images/dent.png')} 
                        style = {dashboardStyling.cards} >
                        <Text style = {dashboardStyling.insideCardText}>
                            50 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style = {dashboardStyling.topBar}>
                <Text style = {dashboardStyling.specialDRText}>
                    Recommnded By Us
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ManageDoctors")}
                >
                    <Text style = {dashboardStyling.seeAllText} >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{height: 240 ,
                 flexDirection : "row" , 
                 justifyContent : "space-evenly"}}>
                <TouchableOpacity 
                    style = {dashboardStyling.recomendcards}
                    onPress = {() => navigation.navigate("DoctorDetail" , {
                        id : 1
                    })}
                >
                    <ImageBackground 
                        source = {require('../Images/dr1.png')} 
                        style = {dashboardStyling.DrDp} >
                    </ImageBackground>
                    <Text style = {dashboardStyling.DrNameStyling}>Hamza Shahid</Text>
                    <Text>Eye Specialist</Text>
                    <Text>Hamza1@gmail.com</Text>
                    <Text style = {dashboardStyling.SalaryStyling}>30$/hour</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {dashboardStyling.recomendcards}
                    onPress = {() => navigation.navigate("DoctorDetail" , {
                        id : 1
                    })}
                >
                    <ImageBackground 
                        source = {require('../Images/dr1.png')} 
                        style = {dashboardStyling.DrDp} >
                    </ImageBackground>
                    <Text style = {dashboardStyling.DrNameStyling}>Urooj Shaukat</Text>
                    <Text>Dental</Text>
                    <Text>Urooj1@gmail.com</Text>
                    <Text style = {dashboardStyling.SalaryStyling}>35$/hour</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}