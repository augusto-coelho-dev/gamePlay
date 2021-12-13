import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import {
    View,
    ImageBackground,
    Text,
    FlatList
} from 'react-native';
import BannerImg from '../../assets/banner.png'
import { Background } from '../../@components/Background';
import { Header } from '../../@components/Header';
import { ListHeader } from "../../@components/ListHeader";
import { ListDivider } from '../../@components/ListDvider';
import { ButtonIcon } from "../../@components/BunttonIcon";

import { theme } from "../../@global/styles/theme";
import { styles } from "../AppointmentDetails/styles";

import { Member } from '../../@components/Members'

export function AppointmentDetails() {
    const members = [
        {
            id:'1',
            username: 'Augusto',
            avatar_url: 'https://github.com/augusto-coelho-dev.png',
            status:'online'
        },
        {
            id:'2',
            username: 'Monge',
            avatar_url: 'https://github.com/augusto-coelho-dev.png',
            status:'offline'
        }
    ]

    return(
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}                            
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendário
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>                    
                </View>

            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 13"
            />
            <FlatList 
                style={styles.members}
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na Partida"
                />                
            </View>

        </Background>
    );
}