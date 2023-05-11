import { useEffect } from 'react'
import {View, Image} from 'react-native'
import { generalStyles } from '../style/generalStyles'
export function Splash ({navigation}) {
    useEffect(()=>{
        setInterval(()=> {}, 1000);
        return navigation.navigate('SignIn')
    })
    return (
        <View style = {{backgroundColor: '#24282C', justifyContent: 'center', alignContent: 'center'}}>
            <Image source = {require('./../assets/appLogo.png')} style = {{height: 200, width: 200, marginBottom: 20}}></Image>
            <Text style = {[generalStyles.main_heading, {color: '#D3F36B'}]}></Text>
        </View>
    )

}