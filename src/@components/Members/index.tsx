import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";



import { styles } from './styles';
import { theme } from "../../@global/styles/theme";

export type MembersProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props ={
    data: MembersProps;
}

export function Member({ data }: Props){
    const {on, primary} = theme.colors;
    const isOline = data.status === 'online';
    
    return(
        <View style={styles.container}>

            <Avatar urlImage={data.avatar_url}/>
            <View>
                <Text style={styles.title}>
                    {
                        data.username
                    }
                </Text>

                <View style={styles.status}>
                    <View 
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOline ? on : primary
                            }
                        ]}
                    />

                    <Text style={styles.nameStatus}>
                        {
                            isOline ? 'Disponível' : 'Ocupado'
                        }
                    </Text>
                </View>                
            </View>


        </View>

    );


}