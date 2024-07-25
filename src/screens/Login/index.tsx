import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Fundo } from '../../components/fundo';
import { styles } from "./styles";
import { Scontainer } from '../../styles/globalstyle';
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export interface IAutenticar {
    email?: string;
    password?: string;
}

export function Login({ navigation }: MenuStackTypes) {

    const [data, setData] = useState<IAutenticar>(); //Preenche dados

    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data) 
        } else {
            Alert.alert("Preencha todos os campos!")
        }
    }

    function handleRegister() {
        navigation.navigate("Cadastrar")
    }

    function handleChange(item: IAutenticar) {
        setData({...data, ...item});
    }



    return (
        
    );
}