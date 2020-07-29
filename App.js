import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.neonMenu}>
        {/* <Text style={styles.neonMoneyTitle}>meu neon</Text> */}
        <Text style={styles.neonMoneyTitle}>R$ 2.020,80</Text> 
        <Text style={styles.neonMoneySub}>Seu saldo atual</Text>
        </TouchableOpacity>    
        <View 
        style={{flex:1, flexDirection: 'row', position:'relative', alignItems:'center', justifyContent: 'space-between'}}>

            <ScrollView 
                showsHorizontalScrollIndicator={false} 
                horizontal={true} 
                contentContainerStyle={{flexGrow:1, marginBottom: 10}}
                >

                <TouchableOpacity style={styles.btnAction}>
                  <Text style={{}}>saldo</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>investimentos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>indicações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>cartões</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>transferências</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>pagamentos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>recargas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAction}>
                  <Text>depósitos</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
        <View style={{flex:3, backgroundColor:'#fff', borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
        </View>  
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0147A5',
  },
  btnAction: {
    padding:5, 
    marginLeft:8, 
    alignItems:'center', 
    justifyContent: 'space-between', 
    backgroundColor: '#fff', 
    width: 70, 
    height: 70, 
    borderRadius: 7, 
    alignItems:'center'
  },
  neonMenu: {
    flex:1,
    flexDirection: 'column',
    alignItems:'flex-start',
    alignContent:'center',
    paddingLeft: 20,
    justifyContent:'flex-start',
    borderColor:'#000'
  },
  neonMoneyTitle : {
    flexDirection: 'column',
    color: '#fff',
    fontSize: 30,
    paddingTop: 60,
    fontWeight: '700'
  },
  neonMoneySub: {
    color: '#fff',
    fontSize: 15,
    paddingTop: 3,
    fontWeight: '500'
  }
});
