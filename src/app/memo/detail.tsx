import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
    router.push('memo/edit')
}

const Detail = (): React.JSX.Element => {
    return (

        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月24日</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='#fff'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //画面いっぱいに要素を広げる
        backgroundColor: '#fff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        fontSize: 20,
        lineHeight: 32,
        color: '#fff',
        fontWeight: 'bold'
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#fff'
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000'
    }
})

export default Detail