import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Link } from 'expo-router'

import Icon from './Icon'
import { type Memo } from '../../types/memo'

interface Props {
    memo: Memo
}

const MemoListItem = (props: Props): React.JSX.Element | null => {
    const { memo } = props
    const { bodyText, updatedAt } = memo
    if (bodyText === null || updatedAt === null) { return null } 
    const dataString = updatedAt.toDate().toLocaleString('ja-JP')
    return (
        <Link 
            href={{ pathname: '/memo/detail', params: {id: memo.id }}}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dataString}</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='delete' size={32} color='#D0D0D0' />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)'
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem