import React, { useEffect } from 'react';
import {View, StyleSheet, Text, Platform, UIManager} from 'react-native';
// import {AccordionList} from 'react-native-accordion-list-view';




const App = () => { 
    const data = [
      
        {
            id: 0,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            id: 1,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 2,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
        },
        {
            id: 3,
            title: 'Lorem Ipsum is simply dummy',
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
    ];
    
    useEffect(() => { 
        // if (Platform.OS === 'android') {
        //     if (UIManager.setLayoutAnimationEnabledExperimental) {
        //         UIManager.setLayoutAnimationEnabledExperimental(true);
        //     }
        // }
    }, []);
    return (
        
            <View style={styles.container} >
                {/* <AccordionList 
                    data={data}
                    customTitle={item => <Text style={{backgroundColor: 'black', color:'white'}}>{item.title}</Text>}
                    customBody={item => <Text style={{backgroundColor: 'black',color:'white'}}>{item.body}</Text>}
                    animationDuration={40}
                /> */}
            </View>
        
        
    );
};

export default App;
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        justifyContent: 'flex-between',
        paddingHorizontal: '3%',
        height: '100%',
        paddingTop : 100,
        marginTop: 70,
        backgroundColor: 'black',
        
    },
});