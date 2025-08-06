import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function Profile() {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Ionicons name='person' size={60} color={"#b7b7b7"}/>
                </View>
                <Text style={styles.fullName}>Joe Doe</Text>
                <Text style={styles.username}>@joedoe</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>18</Text>
                    <Text style={styles.statsLabel}>Posts</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>49</Text>
                    <Text style={styles.statsLabel}>Seguindo</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>89</Text>
                    <Text style={styles.statsLabel}>Seguidores</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileHeader: {
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 24,
        borderWidth: 1,
        borderBottomColor: "##e0e0e0"
    },
    fullName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4
    },
    username: {
        fontSize: 16,
        color: "#666"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    statsContainer: {
        flexDirection: "row",
        marginBottom: 8,
        paddingVertical: 20,
        backgroundColor: "#fff",
    },
    statsNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333"
    },
    statsLabel: {
        fontSize: 14,
        color: "#666",
        marginTop: 4
    },
    statsItem: {
        flex: 1,
        alignItems: "center",

    }
})