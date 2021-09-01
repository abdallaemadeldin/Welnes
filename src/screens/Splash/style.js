import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ccc',
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: '80%',
            resizeMode: 'center'
        }
    });
}