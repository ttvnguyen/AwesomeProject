
import { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View

}from 'react-native'

export const MovieCard = ({movie}) =>{

    // const [currentMovie] = useState({})

        return(
            <View style={styles.card}>
                <Text style={styles.title}>{movie.Title}</Text>
                <Text>{movie.Year}</Text>
                <Text style={styles.plot}>{movie.Plot}</Text>
            </View>
        )
    
}

const styles = StyleSheet.create({
    card: {
        borderWidth:2,
        borderColor: 'black',
        borderRadius:10,
        margin:10,
        padding:10
    },
    plot:{
        color: 'black',
        fontSize: 22,
        fontWeight: '400'

    },
    title: {
        color: 'black',
        fontSize: 32,
        fontWeight: '600'

    }
})