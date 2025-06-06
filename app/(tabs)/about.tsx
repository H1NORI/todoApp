import { Text, View, StyleSheet } from 'react-native';
import {Link} from "expo-router";
import { ThemedText } from '@/components/ThemedText';


export default function AboutScreen() {
    return (
        <View>
            <ThemedText>About screen</ThemedText>
            <Link href="/" style={styles.button}>
                Go to Home screen
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});