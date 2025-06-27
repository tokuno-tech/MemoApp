import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (id: string) => {
    router.push({ pathname: 'memo/edit', params: {id}})
}

const Detail = (): React.JSX.Element => {
    const id = String(useLocalSearchParams().id)
    console.log(id)
    const [memo, setMemo] = useState<Memo | null>(null)
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, updatedAt } = memoDoc.data() as Memo
            setMemo({
                id: memoDoc.id,
                bodyText,
                updatedAt
            })
        })
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={ () => handlePress(id) } style={{ top: 60, bottom: 'auto' }}>
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
        paddingHorizontal: 27
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
        paddingVertical: 32
    }
})

export default Detail