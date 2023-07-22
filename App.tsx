import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { CountDown } from './CountDown';
import { TimerButton } from './TimerButton';
import { ControlButton } from './ControlButton';

let minutes = 1;
const focusTimeMin = minutes * 60 * 1000;
const breakTimeMin = minutes * 60 * 1000;

export default function App() {
  const [timerCount,setTimerCount] = useState<number>(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
  const [timeRun, setTimeRun] = useState<boolean>(false);
  const [minutes, setMinutes] = useState(1);
  
  const handlePress = () => {
    setMinutes(minutes + 1);
  };

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
      <Text>Pomodoro Timer</Text>
      <Text>Time to Focus</Text>
      <CountDown timerDate={new Date(timerCount)}/>
      <ControlButton handlePress={handlePress}/>
      <TimerButton timeRun={timeRun} startTime={startTime} stopTime={stopTime}/>
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
