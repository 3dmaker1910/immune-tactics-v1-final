import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

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
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Zona de Guerra</Text>
          <Text style={styles.cardText}>Cada segundo, trillones de células pelean por tu vida. ¡Conoce a tus defensores!</Text>
        </View>
        {/* Aquí puedes añadir más información científica después */}
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"Nunca, nunca, pero nunca te des por vencido."</Text>
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
  content: { padding: 30 },
  card: { backgroundColor: '#111', padding: 25, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#ff0055' },
  cardTitle: { color: '#ff0055', fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  cardText: { color: '#fff', fontSize: 16 },
  footer: { padding: 40, alignItems: 'center' },
  founderText: { color: '#CCFF00', fontSize: 14, fontStyle: 'italic' }
});


registerRootComponent(App);