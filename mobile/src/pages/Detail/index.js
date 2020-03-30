import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';


export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cachorro Atropelado" com o valor de R$ 120,00';

    function navigateBack() {
        navigation.goBack();
    };

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cachorro Atropelado',
            recipients: ['anderson@nicacio.com.br'],
            body: message,
        })
    };

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5511965693914&text=${message}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>
                <Text style={styles.incidentProperty}>CASOS:</Text>
                <Text style={styles.incidentValue}>Cachorro Atropelado</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions} onPress={() => {}}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}