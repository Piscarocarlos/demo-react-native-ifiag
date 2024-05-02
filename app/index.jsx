import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
    return (
        <>
            <SafeAreaView style={{ height: "100%" }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Bienvenue sur mon application React Native </Text>
                        <Image
                            source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" }}
                            style={{ width: "100%", height: 100 }}
                            resizeMode='cover'
                        />

                        <Link href="/profile" style={styles.title}>Page de profil</Link>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollElt} >
                            <View style={{ backgroundColor: "gray", padding: 10, borderRadius: 8, marginVertical: 10, width: 200 }}>
                                <Text style={styles.title}>Lorem, ipsum.</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", padding: 10, borderRadius: 8, marginVertical: 10, width: 200 }}>
                                <Text style={styles.title}>Lorem, ipsum.</Text>
                            </View>
                            <View style={{ backgroundColor: "gray", padding: 10, borderRadius: 8, marginVertical: 10, width: 200 }}>
                                <Text style={styles.title}>Lorem, ipsum.</Text>
                            </View>
                        </ScrollView>
                    </View>


                    <TouchableOpacity style={{ backgroundColor: "red", width: 200, padding: 10, borderRadius: 10 }} onPress={() => router.replace('/home')}>
                        <Text style={styles.title}>Cliquez ici</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    title: {
        fontSize: 32
    },
    scrollElt: {
        flexDirection: "row",
        gap: 20,
    }
})

export default App