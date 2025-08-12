import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default function Timeline() {
    return (
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

            <ScrollView>
                <View>
                    <View>
                        <Ionicons name="person-circle-outline" size={32} color="#333" />
                    </View>

                    <View>
                        <Text>Maria_dev</Text>
                        <Text>2h atrás</Text>
                    </View>
                </View>

                <Text style={styles.postActions}>Acabei de criar minha primeira postagem</Text>

                <View style={styles.postActions}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="heart-outline" size={20}/>
                        <Text style={styles.actionText}>20</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name='chatbubble-outline' size={20}/>
                        <Text style={styles.actionText}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="share-outline" size={20}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    },
    timestamp:{
        fontSize: 12,
        color: "#666666",
        marginTop: 2,
    },
    postContainer: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
        flexDirection: 'column',
    },
    postContent: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
        lineHeight: 22,
        marginTop: 12,
    },
    postActions: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 12,
    },
    actionButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    actionText: {
        color: '#666',
        fontSize: 14,
        marginLeft: 4,
    }
})