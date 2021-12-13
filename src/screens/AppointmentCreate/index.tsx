import React, {useState} from "react";
import { Feather } from "@expo/vector-icons";

import {
    View,
    Text,
    ScrollView,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import { CategorySelect } from "../../@components/CategorySelect";
import { Header } from '../../@components/Header';
import { RectButton } from "react-native-gesture-handler";
import { GuildIcon } from "../../@components/GuildIcon"; 
import { SmallInput } from "../../@components/Smallinput";
import { TextArea } from "../../@components/TextArea";
import { ModalView } from "../../@components/ModalView";
import { Guilds } from "../Guilds";

import { theme } from "../../@global/styles/theme";
import { styles } from "./styles";
import { Button } from "../../@components/Button";
import { GuildProps } from "../../@components/Guild";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModa, setOpenGuidsModal] = useState(false);
    const [guild, setGuid] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds() {
        setOpenGuidsModal(true);
    }
    function handleCloseModal() {
        setOpenGuidsModal(false);
    }
    function handleOpenGuildSelect(guildSelect: GuildProps) {
        setGuid(guildSelect);
        setOpenGuidsModal(false);
    }
    function handleCategorySelect(categoryId: string) {
         setCategory(categoryId);
    }

    return(
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Header
                    title="Detalhes"
                />
                <Text style={[styles.lable, {marginLeft:24, marginTop:36, marginBottom:18}]}>
                    Categoria
                </Text>
                <CategorySelect
                    hascheckBox
                    setCategory={handleCategorySelect}
                    categorySelected={category}
                />
                <View style={styles.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        
                        
                        <View style={styles.select}>
                            {
                                guild.icon ? <GuildIcon/> : <View style={styles.image}/>
                                
                            }
                            

                            <View style={styles.selectBody}>
                                <Text style={styles.lable}>
                                    {guild.name ? guild.name : 'Selecione um servidor'}
                                </Text>
                            </View>

                            <Feather
                                name="chevron-right"
                                color={ theme.colors.heading }
                                size={18}
                            />
                        </View>
                    </RectButton>
                    
                    <View style={styles.field}>
                        <View>
                            
                            <Text style={[styles.lable, {marginBottom:12}]}>
                                Dia e mês
                            </Text>

                            <View style={styles.colum}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                            
                        </View>

                        <View>
                            
                            <Text style={[styles.lable, {marginBottom:12}]}>
                                Hora e minuto
                            </Text>

                            <View style={styles.colum}>
                                <SmallInput maxLength={2} />
                                <Text style={styles.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                            
                        </View>

                        
                    </View>
                    <View style={[styles.field, {marginBottom:12}]}>
                        <Text style={styles.lable}>
                            Descrição
                        </Text>
                        <Text style={styles.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                    <View style={styles.footer}>
                        <Button
                            title="Agendar"
                        />                          
                    </View>
                  
                </View>
                <ModalView visible={openGuildsModa} closeModal={handleCloseModal}>
                    <Guilds handleGuildSelect={handleOpenGuildSelect}/>
                </ModalView>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}