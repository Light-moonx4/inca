import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const MiinfoScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    {/* 👉 PON TU FOTO AQUÍ: reemplaza la ruta por la de tu imagen en assets/ */}
                    <Image
                        source={require('../assets/perfil.jpg')}
                        style={styles.avatarImage}
                    />
                </View>
            </View>

            <Text style={styles.title}>Jonathan Escorcia</Text>
            <Text style={styles.subtitle}>Desarrollador Web</Text>

            <Text style={styles.bioTitle}>Sobre mí</Text>
            <Text style={styles.bio}>
                Estudiante de desarrollo web en Centro Inca, enfocado en construir aplicaciones
                con React Native, Vite y JavaScript. Me apasiona crear interfaces limpias
                y funcionales, y sigo aprendiendo cada día nuevas tecnologías.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>← Volver</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F8FAFC',
        alignItems: 'center',
        paddingTop: 80,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    avatarContainer: {
        marginBottom: 30,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#E0E7FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'white',
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E2937',
    },
    subtitle: {
        fontSize: 18,
        color: '#64748B',
        marginTop: 8,
        marginBottom: 30,
    },
    bioTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E2937',
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    bio: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
        textAlign: 'left',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#6366F1',
        paddingVertical: 16,
        paddingHorizontal: 50,
        borderRadius: 16,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default MiinfoScreen;
