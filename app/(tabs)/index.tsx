import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Timeline() {
    return(
        <View>
            <View>
                <TextInput 
                multiline
                placeholder="O que está acontecendo?">
                </TextInput>
                <TouchableOpacity>
                    <Text>Postar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    newPostContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    newPostInput: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        minHeight: 80,
        textAlignVertical: 'top',
    }
})