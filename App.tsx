import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { RootSiblingParent } from 'react-native-root-siblings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 42,
    position: 'relative',
    alignSelf: 'center',
    top: Dimensions.get('window').height * .3,
  },
  buttons: {
    position: 'relative',
    bottom: Dimensions.get('window').height * .05,
  },
  generateButton: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 20,
    borderRadius: 10,
    color: 'red',
    marginBottom: 30
  },
  enabledButton: {
    opacity: 1
  },
  generatedCode: {
    color: 'red',
    position: 'absolute',
    top: -20,
    fontSize: 25,
  },
  disabledButton: {
    opacity: .2,
    borderColor: 'blue'
  },
  tooltip: {
    color: 'white',
    position: 'absolute',
    bottom: Dimensions.get('window').height * .1,
    fontSize: 15,
    padding: 10,
    backgroundColor: '#D3D3D3',
    opacity: 0.9,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 2,
    overflow: 'hidden',
  }
});

const getRandomCode = () => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i=0; i<10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function App() {
  const [code, setCode] = useState<string>('');
  const [tooltip, setTooltip] = useState<boolean>(false);
  const generateRandomTextCode = (clear?: boolean) => {
    if(clear) {
      Clipboard.setString(code);
      setTooltip(true);
      setTimeout(() => {
        setTooltip(false)
        setCode('');
      }, 2000);
    } else {
      setCode(getRandomCode());
    }
  };

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Text style={[styles.title]}>ily ❤️</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttons} onPress={() => generateRandomTextCode(false)}>
            <Text style={styles.generateButton}>Generate Text Code</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, code.length === 0 ? styles.disabledButton : styles.enabledButton]}
            onPress={() => generateRandomTextCode(true)}
            disabled={code.length === 0}
          >
            <Text style={styles.generateButton}>Copy & Clear Code</Text>
          </TouchableOpacity>
          {
            code.length > 0 ? (
              <Text style={styles.generatedCode}>{code}</Text>
            ) : <></>
          }
          {
            tooltip ? (
              <Text style={styles.tooltip}>Copied to clipboard babez 😎</Text>
            ) : <></>
          }
        </View>
      </View>
    </RootSiblingParent>
  );
}
