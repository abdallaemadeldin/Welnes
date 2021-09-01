import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ccc',
            alignItems: 'center'
        },
        headerView: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20
        },
        btn: {
            flex: 1,
            marginHorizontal: 10,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            height: 44,
            borderRadius: 4
        },
        videoCard: {
            flex: 1,
            height: 200,
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 4,
            marginBottom: 10
        },
        list: {
            width: '100%'
        },
        cardOverlay: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0008'
        },
        playIcon: {
            width: 70,
            height: 70,
            tintColor: '#fff',
        }
    });
}