import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { CountDown } from './CountDown';
import { TimerButton } from './TimerButton';

const focusTimeMin = 0.2 * 60 * 1000;
const breakTimeMin = 0.1 * 60 * 1000;

export default function App() {
  const [timerCount,setTimerCount] = useState<number>(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [timeRun, setTimeRun] = useState<boolean>(false);

  const startTime = () => {
    setTimeRun(true);
    const id = setInterval(() => setTimerCount(prev => prev -1000),1000);
    setTimerInterval(id);
  }

  const stopTime = () => {
    if (timerInterval != null){
      clearInterval(timerInterval);
    }
    setTimeRun(false);
  }

  return (
    <View style={styles.container}> 
      <CountDown timerDate={new Date(timerCount)}/>
      <TimerButton timeRun={timeRun} startTime={startTime} stopTime={stopTime}/>
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 15,
    height: 75,
    width: 125,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    fontSize: 20,
    color: 'white',
  },
});
