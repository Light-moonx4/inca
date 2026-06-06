import React,{useState} from 'react';{/*Activa React*/}
{/*Importa los componentes nativos para la calculadora*/}
import { View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,SafeAreaView,StatusBar } from 'react-native';

export default function App() {
  return (
  <SafeAreaView style={style.container}>
    <StatusBar/>
    <Text style={style.titulo}>Calculadora</Text>
    <View style={style.inputContainer}>  {/*contenedor de la calculadora*/}
      <TextInput
        style={style.input}
        placeholder='Ingrese un primer numero'
        keyboardType='numeric'
      />
      <TextInput
        style={style.input} 
        placeholder='Ingrese un segundo numero'
        keyboardType='numeric'
      />
    </View>
    <View style={style.botonesContainer}> {/*contenedor de los botones*/}
      <TouchableOpacity style={style.boton}>
        <Text style={style.botonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.boton}>
        <Text style={style.botonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.boton}>
        <Text style={style.botonText}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.boton}>
        <Text style={style.botonText}>/</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={style.botonLimpiar}>
      <Text style={style.botonLimpiarTexto}>limpiar</Text>
    </TouchableOpacity>
  </SafeAreaView>
);}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#60a5fa',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1e2937',
    color: 'white',
    fontSize: 22,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#3b82f6',
    borderRadius: 15,
    justifyContent: 'center',
    width: 70,
    height: 70,
    elevation: 5,
    alignItems: 'center',
  },
  botonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }, 
  botonLimpiar: {
    backgroundColor: '#ef4444',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 20,
  },
  botonLimpiarTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    marginTop: 40,
    backgroundColor: '#1e2937',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#60a5fa',
  },
  resultadoText: {
    color: '#e2e8f0',
    fontSize: 40,
  },
  resultadoNumero: {
    color: '#34d399',
    fontSize: 28,
    fontWeight: 'bold',
  },
});