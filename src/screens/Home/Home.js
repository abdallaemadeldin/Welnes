import React, { memo } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, ImageBackground, ActivityIndicator, Linking } from 'react-native';
import { useHome } from 'src/hooks';
import { style } from './style';

const Home = () => {
    const { container, headerView, btn, videoCard, list, playIcon, cardOverlay, empty, uploadingOverlay, uploadingText, contentContainerStyle, indicator } = style();
    const { videos, uploading, loading, openGallery, openCamera } = useHome();

    const renderItem = ({ item }) => {
        return (
            <ImageBackground source={{ uri: item.thumbnail }} style={videoCard}>
                <TouchableOpacity activeOpacity={1} style={cardOverlay} onPress={() => Linking.openURL(item.video)}>
                    <Image source={require('src/assets/play.png')} style={playIcon} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    const renderEmpty = () => <Text style={empty}>No videos found!</Text>

    return (
        <View style={container}>
            <View style={headerView}>
                <TouchableOpacity style={btn} activeOpacity={.8} onPress={openGallery} disabled={loading}>
                    <Text>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btn} activeOpacity={.8} onPress={openCamera} disabled={loading}>
                    <Text>Capture</Text>
                </TouchableOpacity>
            </View>
            {loading ? <ActivityIndicator color="#000" style={indicator} /> : <FlatList
                data={videos}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                style={list}
                ListEmptyComponent={renderEmpty}
                contentContainerStyle={contentContainerStyle}
            />}
            {uploading && <View style={uploadingOverlay}>
                <ActivityIndicator color="#fff" size="large" />
                <Text style={uploadingText}>Uploading...</Text>
            </View>}
        </View>
    );
}

export default memo(Home);