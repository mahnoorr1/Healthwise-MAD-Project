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
        width: 180, 
        height: 180, 
        backgroundColor: '#CDCBCB', 
        borderRadius: 180/2,
        borderColor: 'white',
        borderWidth: 5
      },
      image: {
        width: 170, 
        height: 170, 
        borderRadius: 170/2,
      },
})