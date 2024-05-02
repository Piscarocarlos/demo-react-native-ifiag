import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/button'
import * as ImagePicker from 'expo-image-picker';
import MapView from 'react-native-maps'

const Home = () => {
    const [photo, setPhoto] = useState(null);

    const openGalerie = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setPhoto(result.assets[0].uri);
        }
    }

    return (
        <View>
            <CustomButton title="Ouvrir la galerie" handleClick={openGalerie} />
            <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />

            <MapView
                style={{ height: 300 }}
                provider="google"
                initialRegion={{
                  // casablanca location
                    latitude: 33.5731,
                    longitude: -7.5898,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />
        </View>
    )
}

export default Home