import React, { useState } from 'react';
import { View, Text, StyleSheet,Vibration} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';


import {Countdown } from '../components/CountDown';

import { size, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;
export const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS
]


export const Timer = ({ focusSubject, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  
  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    setMinutes();
    reset();
}
  
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown 
          minutes = {minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}         
           />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on </Text>
          <Text style={styles.task}>{focusSubject}</Text>
          <View style={{ paddingTop: spacing.sm }}>
          <ProgressBar 
            progress={progress}            
            style={{ height: 10 }} 
            color={colors.darkBlue} />
        </View>
        </View>

        
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
          
      </View>
      <View style={styles.clearSubjectWrapper}>
            <RoundedButton size={50} title ="-" onPress ={clearSubject}/> 
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    border: 2,

    //justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    //paddingTop: 150,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:20,
  },
  task: {
    color: colors.darkBlue,
    textAlign: 'center',
     fontSize:18,
  },
  clearSubjectWrapper :{
    flexDirection: 'row',
    justifyContent:'center',
  }
});
