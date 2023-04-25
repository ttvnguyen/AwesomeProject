import {
    StyleSheet,
    Text,
    View

}from 'react-native'
import { Header } from '../components/Header'
import { MoviesList } from '../components/MoviesList'

export const Home = () =>{
    return(
        <View style= {styles.screen}>
            <Header/>
            <Text>Home</Text>
            <MoviesList />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        minHeight: '100%'
    }
})