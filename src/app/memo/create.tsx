import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { router } from 'expo-router'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
    router.back()
}

const Create = (): React.JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value='' />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color='#fff'/>
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 //画面いっぱいに要素を広げる
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