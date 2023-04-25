import { useCallback, useState, useMemo } from 'react'
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View

}from 'react-native'

import { MovieCard } from './MovieCard'

export const MoviesList = () =>{
    const [movie, setMovie] = useState({})
    const [inputState, setInputState] = useState('')
    const [inputError, setInputError] = useState(false)

    const getMovie = useCallback(async () =>{
        console.log(inputState, '#### INPUT STATE ########')
        if (inputState !== ''){
            try{
                const response = await fetch(`https://www.omdbapi.com/?apikey=3a37203&t=${inputState}`)
        
                const data = await response.json()
                console.log(data)
                setMovie(data)
            }catch (err){
                console.log(err)
            }
        }else{
            setInputError(true)
        }
    }, [inputState])

    const updateTextInput = useCallback((textValue) => {})

    const inputStype = useMemo(() =>({
        ...styles.input,
        borderColor: inputError ? 'red' :'gray'
    }), [inputError])

    return(
        <View>
            <Text style={styles.inputLabel}>
                Search for a Movie
            </Text>
            <TextInput onChange={setInputState}
            style={styles.input}/>
            
            <MovieCard />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        borderColor: 'gray',
        margin: 10,
        paddingVerticle: 0
    },
    inputLabel:{
        color:'white',
        fontSize:26,
        textAlign: 'center'
    }
    
})