import {View, Text, StyleSheet} from 'react-native'

interface Props {
    children: string
}

const MemoListItem = (props: Props): React.JSX.Element => {
    const children = props.children
    return (
        <View style={styles.circleButton}>
            <Text style={styles.circleButtonLabel}>{ children }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 8
        },
        elevation: 8 // Androidの影の効果
    },
    circleButtonLabel: {
        color: '#fff',
        fontSize: 40,
        lineHeight: 48
    }
})

export default MemoListItem
