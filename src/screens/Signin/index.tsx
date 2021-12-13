import React from "react";
import { 
    View, 
    Text,
    Image,
    Alert
} from "react-native";

import { useAuth } from '../../hooks/auth';


import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../@components/BunttonIcon";
import { Background } from '../../@components/Background';
import { useNavigation } from "@react-navigation/native";



export function Signin(){
    const navigation = useNavigation();
    const { user, signIn} = useAuth();
    
    async function handleHome() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error)
        }
        navigation.navigate('Home');
    }    
    return(
        <Background>
            <View style = {styles.container}>
                <Image 
                    source={IllustrationImg} 
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas 
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon 
                        title="Entrar com discord"
                        onPress={handleHome}
                    />
                </View>

            </View>
        </Background>
    );
}