import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';

export function TabNavigation ({navigationItems, data, type, callback}) {
    const [activeTab, setActiveTab] = useState('All');
    const setActiveTabFilter = status => {
        setActiveTab(status)
    }
    return (
        <View style = {styles.tab}>
            <ScrollView horizontal ={true} showsHorizontalScrollIndicator = {false} 
            contentContainerStyle={{
                    flexGrow: 1,
                    paddingRight: navigationItems.length == 3 ? 10 : 130,
                }}>
            {
                navigationItems.map((item, index) =>{
                    return (
                        <TouchableOpacity key = {index}
                        style = {[styles.tabItem, activeTab === item.status && styles.activeTabItem]}
                            onPress = {() => {
                                setActiveTabFilter(item.status) 
                                    callback(activeTab)
                            }}>
                            <Text 
                            style = {activeTab === item.status ? styles.activeText : styles.tabItemText}>
                                {item.status}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    tab: {
        alignSelf: "center",
        marginBottom: 10,
        backgroundColor: '#24282C',
        padding: 5,
        flexDirection: "row",
        marginTop: 20,
    },
    tabItem: {
        width: '30%',
        flexDirection: "row",
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        justifyContent: "center",
        marginRight: 15,
        borderRadius: 20, 
        borderWidth: 1,
    },
    tabItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
    activeTabItem: {
        backgroundColor: '#D3F36B',
        borderColor: '#D3F36B',
    },
    activeText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
    },
})