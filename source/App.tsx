import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ContactRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.contactCard}>
      <View style={styles.iconCircle}><Text style={styles.icon}>{icon}</Text></View>
      <View style={styles.contactCopy}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={styles.contactValue} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#075e59" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>MY PROFILE</Text>
        <View style={styles.avatarRing}>
          <Image source={require('./assets/avatar.png')} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Văn Hạnh</Text>
        <Text style={styles.role}>SOFTWARE ENGINEERING</Text>
        <View style={styles.divider} />
        <ContactRow icon="☎" label="PHONE" value="+123 456 789" />
        <ContactRow icon="✉" label="EMAIL" value="hanhtv.22ite@vku.udn.vn" />
        <Text style={styles.footer}>A little introduction</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#075e59' },
  content: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 24 },
  eyebrow: { color: '#a9ddd4', fontSize: 12, fontWeight: '700', letterSpacing: 3, marginBottom: 22 },
  avatarRing: { padding: 5, borderWidth: 2, borderColor: '#9bd9cb', borderRadius: 76, marginBottom: 18 },
  avatar: { width: 132, height: 132, borderRadius: 66 },
  name: { color: '#ffffff', fontSize: 36, fontWeight: '700', letterSpacing: 1 },
  role: { color: '#bce7de', fontSize: 14, fontWeight: '600', letterSpacing: 2, marginTop: 8 },
  divider: { height: 1, width: 88, backgroundColor: '#83c7bb', marginVertical: 25 },
  contactCard: { width: '100%', minHeight: 78, backgroundColor: '#ffffff', borderRadius: 16, marginVertical: 7, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', shadowColor: '#003c38', shadowOpacity: 0.16, shadowRadius: 8, elevation: 3 },
  iconCircle: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#e2f4ef', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  icon: { color: '#08766a', fontSize: 20, fontWeight: '700' },
  contactCopy: { flex: 1 },
  contactLabel: { color: '#64827d', fontSize: 10, fontWeight: '700', letterSpacing: 1.5, marginBottom: 4 },
  contactValue: { color: '#16443e', fontSize: 17, fontWeight: '600' },
  footer: { color: '#a9ddd4', fontSize: 13, letterSpacing: 1, marginTop: 23 },
});
