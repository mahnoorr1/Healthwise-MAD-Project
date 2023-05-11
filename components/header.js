import { Text, View, Image, StyleSheet } from 'react-native';

export function ImageHeader() {
    return(
        <View style = {
            {
              height: '18%', 
              width: '100%', 
              backgroundColor: '#24282C',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20
            }}>
             <View style = {styles.circle}>
                <Image style = {styles.image} source = {{uri: "https://reactjs.org/logo-og.png"}}></Image>
             </View>
          </View>
    )
}
const styles = StyleSheet.create({
    circle: {
        marginTop: '12%', 
        justifyContent: 'center', 
        alignSelf: 'center', 
        width: 130, 
        height: 130, 
        backgroundColor: '#CDCBCB', 
        borderRadius: 130/2,
        borderColor: 'white',
        borderWidth: 5
      },
      image: {
        width: 120, 
        height: 120, 
        borderRadius: 120/2,
      },
})