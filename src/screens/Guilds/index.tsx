  
import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild } from '../../@components/Guild';
import { ListDivider } from '../../@components/ListDvider';
import { GuildProps } from '../../@components/Guild';
import { styles } from './styles';



type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props){
    const guilds = [

        {
            id:'1',
            name:'Lendaries',
            icon: null,
            owner: true
        },
        
        {
            id:'2',
            name:'Esquéce',
            icon: null,
            owner: false
        },
        
    ]
    return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Guild data={item}
                onPress={() => handleGuildSelect(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=><ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 68 , paddingTop:64}}
            ListHeaderComponent={()=> <ListDivider isCentered />}
            style={styles.guilds}
        />

    </View>
    );
}