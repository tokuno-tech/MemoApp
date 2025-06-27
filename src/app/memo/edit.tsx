import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config' 


const handlePress = (id: string, bodyText: string): void => {
    //保存処理
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    setDoc(ref, {
        bodyText,
        updateAt: Timestamp.fromDate(new Date())
    })
        .then(() => {
            router.back()
        })
        .catch((error) => {
            console.log(error)
            Alert.alert("更新に失敗しました")
        })
}

const Edit = (): React.JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    console.log('edit', id)
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
            .then((docRef) => {
                const remoteBodyText = docRef.data()?.bodyText
                setBodyText(remoteBodyText)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
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
            <CircleButton onPress={() => handlePress(id, bodyText)}>
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
        flex: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27
    }
})


export default Edit