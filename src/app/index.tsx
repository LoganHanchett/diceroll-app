import { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native';

// Display
export default function HomeScreen() {
  {/* state for the dice roll value */}
  const [roll, setRoll] = useState(20);
  
  return (
    <View style={styles.container}>
      {/* background image */}
      <Image
        source={require('C:/Users/hanch/diceroll-app/assets/images/background.png')}
        style={styles.background}
      />

      {/* d20 dice image */}
      <Image
        source={require('C:/Users/hanch/diceroll-app/assets/images/d20Dice.png')}
        style={styles.d20Dice}
        resizeMode="contain"
      />

      {/* roll dice button */}
      <Pressable
        style={styles.rerollButton}
        onPress={() => {
          const newRoll = Math.floor(Math.random() * 20) + 1;
          setRoll(newRoll);
          Alert.alert('Reroll', `You rolled a ${newRoll}!`);
        }}
      >
        <Image
          source={require('C:/Users/hanch/diceroll-app/assets/images/rerollButton.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </Pressable>
      
      {/* change dice button */}
      <Pressable
        style={styles.changeDiceButton}
        onPress={() => Alert.alert('Change Dice', 'Choose your dice type (WIP)')}
      >
        <Image
          source={require('C:/Users/hanch/diceroll-app/assets/images/changeDiceButton.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  changeDiceButton: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    width: 160,
    height: 85,
    resizeMode: 'contain',
  },
  d20Dice: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  rerollButton: {
    position: 'absolute',
    bottom: '20%',
    alignSelf: 'center',
    width: 300,
    height: 100,
  },
});
