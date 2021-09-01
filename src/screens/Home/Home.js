import React, { memo } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { style } from './style';

const Home = () => {
    const { container, headerView, btn, videoCard, list, playIcon, cardOverlay } = style();

    const renderItem = () => {
        return (
            <ImageBackground source={{ uri: 'https://www.socialmediaexaminer.com/wp-content/uploads/2015/06/ds-video-thumbnails-480.png' }} style={videoCard}>
                <TouchableOpacity activeOpacity={1} style={cardOverlay}>
                    <Image source={require('src/assets/play.png')} style={playIcon} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    return (
        <View style={container}>
            <View style={headerView}>
                <TouchableOpacity style={btn} activeOpacity={.8}>
                    <Text>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btn} activeOpacity={.8}>
                    <Text>Capture</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={[{}, {}, {}]}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                style={list}
            />
        </View>
    );
}

export default memo(Home);