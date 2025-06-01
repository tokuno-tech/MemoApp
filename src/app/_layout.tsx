import { Stack } from 'expo-router'

const Layout = (): React.JSX.Element => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3',
        },
        headerTintColor: '#fff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
    }} />
}

export default Layout