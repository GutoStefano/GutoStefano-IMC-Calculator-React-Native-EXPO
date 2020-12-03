import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// or any pure javascript modules available in npm
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
export default class App extends React.Component {
  state = {
    peso: 45,
    altura: 1.7,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7',
  };

  calcularImc = () => {
    const result = this.state.peso / (this.state.altura * this.state.altura);
    this.setState({
      imc: Math.ceil(result),
    });

    // CLASSIFICAR DE ACORDO COM A LEGENDA
    if (result < 18.5) {
      this.setState({
        legenda: 'ABAIXO DO PESO',
        cor: '#2ecc71',
      });
    }
    if (result >= 18.5 && result < 24.9) {
      this.setState({
        legenda: 'Peso normal',
        cor: '#27ae60',
      });
    }
    if (result >= 24.9 && result < 29.9) {
      this.setState({
        legenda: 'SOBREPESO',
        cor: '#f1c40f',
      });
    }
    if (result >= 29.9 && result < 34.9) {
      this.setState({
        legenda: 'OBESIDADE GRAU 1',
        cor: '#e74c3c',
      });
    }
    if (result >= 34.9 && result < 39.9) {
      this.setState({
        legenda: 'OBESIDADE GRAU 2',
        cor: '#c0392b',
      });
    }
    if (result >= 40) {
      this.setState({
        legenda: 'OBESIDADE GRAU 3',
        cor: '#c0392b',
      });
    }
  };

  render() {
    const imc = 25;
    const legenda = 'Normal';
    // imc = peso/altura²
    return (
      <View style={[styles.app, { backgroundColor: 'white' }]}>
        <Text style={styles.legenda}>SEU IMC</Text>
        <View style={[styles.painel, { backgroundColor: this.state.cor }]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.tipo}>{this.state.legenda}</Text>
        </View>
        <View style={styles.pesoaltura}>
          <TextInput
            style={styles.peso}
            label="Peso"
            keyboardType={'number-pad'}
            onChangeText={(valorP) => {
              this.setState({ peso: valorP.replace(',', '.') });
            }}
          />
          <TextInput
            style={styles.altura}
            label="Altura"
            keyboardType={'number-pad'}
            onChangeText={(valorA) => {
              this.setState({ altura: valorA.replace(',', '.') });
            }}
          />
          <Button
            mode="contained"
            onPress={this.calcularImc}
            color="#2980b9"
            style={styles.botao}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  app: {
    padding: 10,
  },
  painel: {
    borderRadius: 5,
    marginVertical: 5,
    width: 150,
    alignSelf: 'center',
  },
  legenda: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Franklin Gothic',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 34,
    fontFamily: 'Impact',
    fontWeight: 'bold',
  },
  tipo: {
    textAlign: 'center',
    fontFamily: 'Franklin Gothic',
    fontSize: 16,
    fontWeight: 'bold',
  },
  peso: {
    marginVertical: 2,
  },
  altura: {
    marginVertical: 14,
  },
  pesoaltura: {
    padding: 10,
  },
  botao: {
    borderRadius: 50,
    marginVertical: 5,
    width: 150,
    alignSelf: 'center',
  },
});
