import { StyleSheet } from "react-native";
export const generalStyles = StyleSheet.create({
    main_heading: {
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
    header: {
        height: '18%', 
        width: '100%', 
        backgroundColor: '#24282C',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    timeView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 8
    },
    timeButton: {
        backgroundColor: '#D3F36B',
        width: 75,
        height: 25,
        borderRadius: 15,
        justifyContent: 'center',
        marginRight: 10
    },
    timeText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500',
        alignSelf: 'center'
    },
    grayText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#9D9D9D',
        marginBottom: 10,
        marginLeft: 5
      },
      line: {
        height: 2,
        width: '98%',
        marginLeft: '1%',
        marginRight: '1%',
        backgroundColor: '#CDCBCB',
      },
    
})