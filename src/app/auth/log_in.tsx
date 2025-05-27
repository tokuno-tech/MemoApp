import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const LogIn = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Text>Log In</Text>
                <TextInput value='Email Address' />
                <TextInput value='Password' />
                <View>
                    <Text>Submit</Text>
                </View>
                <View>
                    <Text>Not registered?</Text>
                    <Text>Sign up here!</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default LogIn