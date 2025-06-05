import { View, TextInput, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
    if (auth.currentUser === null) return
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
        .then(() => {
            console.log('success')
            router.back()
        })
        .catch((error) => {
            console.log(error)
        })
}

const Create = (): React.JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => setBodyText(text)}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() => {handlePress(bodyText)}}>
                <Icon name='check' size={40} color='#fff'/>
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //画面いっぱいに要素を広げる
        backgroundColor: '#fff'
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})


export default Create