import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const user = { id: 1, name: "Juan Pérez", age: 28 };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>¡Bienvenido! </Text>
                <Text style={styles.title}>Explora la App</Text>
            </View>
            
            <TouchableOpacity
                style={styles.card}
                // CORREGIDO: Ahora apunta exactamente a 'Detail' en lugar de 'DetailsFull'
                onPress={() => navigation.navigate('Detail', {
                    title: 'Producto Premium',
                    description: 'Este es un producto de alta calidad con características avanzadas.',
                    price: 89.99,
                })}>
                <Ionicons name="cube-outline" size={40} color="#6366F1" />
                <Text style={styles.cardTitle}>Ver Detalles</Text>
                <Text style={styles.cardSubtitle}>Pasar parámetros →</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.card, { backgroundColor: '#F0F9FF' }]}
                onPress={() => navigation.navigate('Profile', { user })}
            >
                <Ionicons name="person-outline" size={40} color="#0EA5E9" />
                <Text style={styles.cardTitle}>Ir a Perfil</Text>
                <Text style={styles.cardSubtitle}>Con datos de usuario</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.card, { backgroundColor: '#FEF3C7' }]}
                onPress={() => navigation.navigate('Miinfo')}
            >
                <Ionicons name="information-circle-outline" size={40} color="#D97706" />
                <Text style={styles.cardTitle}>Mi Información</Text>
                <Text style={styles.cardSubtitle}>Foto y descripción</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flexGrow: 1, backgroundColor: '#F8FAFC', padding: 20, },
    header: { marginTop: 60, marginBottom: 40, alignItems: 'center', },
    welcome: { fontSize: 18, color: '#64748B', },
    title: { fontSize: 32, fontWeight: '700', color: '#1E2937', marginTop: 8, },
    card: { backgroundColor: 'white', borderRadius: 20, padding: 24, marginVertical: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.08,
    shadowRadius: 15, elevation: 8, alignItems: 'center', },
    cardTitle: { fontSize: 20, fontWeight: '600', color: '#1E2937', marginTop: 16, },
    cardSubtitle: { fontSize: 15, color: '#64748B', marginTop: 4, },
});

export default HomeScreen;