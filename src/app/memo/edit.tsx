import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
    //保存処理
    router.back()
}

const Edit = (): React.JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={"買い物\nリスト"} />
            </View>
            <CircleButton onPress={handlePress}>
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


export default Edit