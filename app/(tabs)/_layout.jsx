import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='home'
                options={{
                    title: "Accueil",
                    tabBarIcon: () => <>
                        
                    </>
                }}
            />
            <Tabs.Screen
                name='messages'
                options={{
                    title: "Messages",
                    tabBarIcon: () => <>
                        
                    </>
                }}
            />
        </Tabs>
    )
}

export default TabsLayout