import React from 'react';
import {StatusBar} from 'react-native';

import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { Background } from './src/@components/Background';

export default function App (){
    const [fontsLoad] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold
    });
    if (!fontsLoad) {
        return <AppLoading/>
    }

    return(
        
        <Background>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <AuthProvider>
                <Routes />   
            </AuthProvider>

        </Background>
        
    );
}