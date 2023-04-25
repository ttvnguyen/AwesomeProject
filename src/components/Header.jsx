import {
    StyleSheet,
    Text,
    View

}from 'react-native'

export const Header = () =>{
    return(
        <View style ={styles.headerView}>
            <Text style ={styles.headerText}>
                MovieSearch Mobile
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'black',
        heigh: '10%',
        paddingVertical:20,
        justifyContent:'center'
    },
    headerText:{
        color:'white',
        fontSize:26,
        textAlign: 'center'
    }
    
})