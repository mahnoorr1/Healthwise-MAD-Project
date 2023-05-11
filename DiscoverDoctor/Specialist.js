import { 
    View,
    Text,
    Image,
    StyleSheet ,
    TouchableOpacity,
    ImageBackground
} from 'react-native';


export const Specialist = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View>
                <Text style = { styles.heading}>
                    Specialist Doctors
                </Text>
            </View>
            <View
                style={styles.line}
            />
            <View style = {styles.cardsBlock}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Eye Specialist' })}
                >
                    <ImageBackground 
                        source = {require('../Images/eye.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            40 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Cardio Specialist' })}
                >
                    <ImageBackground 
                        source = {require('../Images/cardio.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            20 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style = {styles.cardsBlock}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Dental Specialist' })}
                    >
                    <ImageBackground 
                        source = {require('../Images/dent.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            40 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Cardio Specialist' })}
                >
                    <ImageBackground 
                        source = {require('../Images/cardio.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            20 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style = {styles.cardsBlock}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Eye Specialist' })}
                >
                    <ImageBackground 
                        source = {require('../Images/eye.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            40 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SpecialistCard" ,  { value: 'Dental Specialist' })}
                >
                    <ImageBackground 
                        source = {require('../Images/dent.png')} 
                        style = {styles.cards} >
                        <Text style = {styles.insideCardText}>
                            20 Doctors
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    container:{
        backgroundColor: '#F7F6F0',
        padding:8
    },
    heading:{
        fontSize: 32,
        color:'black',
        marginTop:30
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop:15
    },
    cardsBlock:{
        marginTop:20,
        height :170,
        flexDirection :"row",
        justifyContent :"space-evenly"
    },
    cards :{
        length : 170,
        width : 130,
        borderRadius : 50
    },
    insideCardText:{
        color: "white",
        fontSize: 12,
        lineHeight: 290,
        alignSelf:"center",
        fontWeight: "bold"
    },
}