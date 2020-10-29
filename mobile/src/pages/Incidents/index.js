import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, View, FlatList, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            <FlatList style={styles.incidentList} data={[1, 2, 3]}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentValue}>Apade</Text>

                        <Text style={styles.incidentProperty}>CASO: </Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>VALOR: </Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => { }}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02841" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );

}