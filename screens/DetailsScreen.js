import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ route, navigation }) => {
    const {title, description, price} = route.params || {};
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="information-circle" size={80} color="#6366F1" />

                <Text style={styles.title}>{title || 'Pantalla de Detalles'}</Text>

                {description && <Text style={styles.description}>{description}</Text>}
                {price && <Text style={styles.price}>${price}</Text>}

                <Text style={styles.info}>Parametros recibidos Correctamente</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        padding: 20,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E2937',
        marginVertical: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 17,
        color: '#475569',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    price: {
        fontSize: 26,
        fontWeight: '700',
        color: '#10B981',
        marginVertical: 10,
    },
    info: {
        fontSize: 16,
        color: '#64748B',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#6366F1',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
export default DetailsScreen;

