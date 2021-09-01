import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../Home';

jest.mock("react-native-fs", () => "RNFS");
jest.mock("react-native-image-crop-picker", () => "RNImagePicker");
jest.mock("react-native-ffmpeg", () => "FFMPEG");

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            replace: jest.fn(),
        }),
    };
});

it('renders correctly', () => {
    const tree = renderer.create(
        <SafeAreaProvider initialMetrics={{ insets: { top: 0, bottom: 0, left: 0, right: 0 } }}>
            <Home />
        </SafeAreaProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});