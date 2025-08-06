import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
 
export default function TabLayout() {
    return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#040FD9',
    }}
    >
         <Tabs.Screen name='index' options={{title: "Timeline", tabBarIcon: () => (<Ionicons name="home"/>)}}>
         </Tabs.Screen>
        <Tabs.Screen name='profile' options={{title: "Profile", tabBarIcon: () => (<Ionicons name="person"/>)}}>
        </Tabs.Screen>
    </Tabs>
    )
}