import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Title from "../component/title";

const Home = () => {
    return (
        <View >
            <Title />
            <View>
                <Image
                    source={{
                        uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000'
                    }}
                    style={style.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Home;

const style = StyleSheet.create({
    banner: {
        height: 300,
        width: '100%',
    },
    bannerContainer: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});
