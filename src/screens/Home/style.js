import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { bottom } = useSafeAreaInsets();

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
        },
        empty: {
            textAlign: 'center',
            marginTop: '10%',
            fontWeight: 'bold',
            fontSize: 18,
            color: '#000'
        },
        uploadingOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: '#0005',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1
        },
        uploadingText: {
            fontSize: 16,
            color: '#fff',
            lineHeight: 26,
            fontWeight: 'bold'
        },
        contentContainerStyle: {
            paddingBottom: bottom + 10
        },
        indicator: {
            marginTop: '30%'
        }
    });
}