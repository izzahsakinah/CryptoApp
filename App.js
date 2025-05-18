import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListCoins from './components/ListCoins';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
      <Text style={styles.mainTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>
      <ListCoins/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainTitle:{
    fontSize: 24,
    fontWeight:"bold",
  },
  titleWrapper:{
    marginTop: 80,
    paddingHorizontal: 16,
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9A881',
    marginHorizontal: 16,
    marginTop: 16,
  }
});
