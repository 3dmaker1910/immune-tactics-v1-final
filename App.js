import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: LOGO_URL }} style={styles.logo} />
        <Text style={styles.title}>M102: ESCUDO INMUNE</Text>
        <Text style={styles.subtitle}>Tu Ejército Invisible en Acción</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.micraCard}>
          <Text style={styles.micraTitle}>Dra. Micra dice:</Text>
          <Text style={styles.micraText}>"¡Prepárate para la batalla! Tu cuerpo tiene el ejército más avanzado del mundo."</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>La Zona de Guerra 🛡️</Text>
          <Text style={styles.infoText}>Cada segundo, trillones de Macrófagos y Células T patrullan tus venas para detectar y destruir invasores.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"Nunca, nunca, pero nunca te des por vencido."</Text>
        <Text style={styles.founderName}>- Nando, Fundador</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { padding: 50, alignItems: 'center', backgroundColor: '#1a1a2e' },
  logo: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { color: '#ff0055', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#00d2ff', fontSize: 16 },
  content: { padding: 20 },
  micraCard: { backgroundColor: '#111', padding: 20, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#00d2ff', marginBottom: 20 },
  micraTitle: { color: '#00d2ff', fontWeight: 'bold' },
  micraText: { color: '#fff', fontStyle: 'italic' },
  infoCard: { backgroundColor: '#111', padding: 25, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#ff0055' },
  infoTitle: { color: '#ff0055', fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  infoText: { color: '#fff', fontSize: 16 },
  footer: { padding: 50, alignItems: 'center' },
  founderText: { color: '#CCFF00', fontSize: 14, fontStyle: 'italic', textAlign: 'center' },
  founderName: { color: '#666', fontSize: 12, marginTop: 10 }
});

registerRootComponent(App);