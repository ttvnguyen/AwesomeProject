import { useEffect, useState, useMemo, useCallback } from 'react'
import {
    StyleSheet,
    Button,
    Text,
    TextInput,
    View,
    Pressable
} from 'react-native'
import {MovieCard} from './MovieCard'

export const MoviesList = () => {
    const [movie, setMovies] =useState({})
    const [inputState, setInputState] = useState()
    const [inputError, setInputError] = useState(false)
    
    const getMovie = useCallback(async () => {
        if (inputState !== '') {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=3a37203&t=${inputState}`)
                // const response = await fetch(`http://www.omdbapi.com/?apikey=3a37203&t=frozen`)
                const data = await response.json()
                console.log(data)
                setMovies(data)
            } catch (err) {
                console.log(err)
            }
        } else{
            setInputError(true)
        }
    }, [inputState])

    const updateTextInput = useCallback((textValue) => {
        console.log(textValue)
        setInputState((prev) => textValue)
    }, [])

    const inputStyle = useMemo(() => ({
        ...styles.input,
        borderColor: inputError ? 'red' : 'gray'
    }), [inputError])

    useEffect(()=> {
        getMovie()
    }, [])

    return (
        <View>
            <Text style={styles.imputLabel}>
                Seach for a movie:
            </Text>
            <TextInput
                onChangeText = {updateTextInput}
                value={inputState}
                style= {styles.input}
            />
            <Pressable onPress={getMovie} title='Search' style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </Pressable>
            {movie.Title &&
                <MovieCard movie={movie}/>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        paddingVertical: 0,
        marginTop: 0,
    },
    imputLabel: {
        marginBottom: 0,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: 'gray',
        marginHorizontal: 10,
        marginBottom: 10,
        marginBottom: 5,
    },
    buttonText:{
        color: 'white',
        fronSize: 16,
    }
})