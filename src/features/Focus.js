import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

import { TextInput } from 'react-native-paper';


import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes'
import { FocusHistory } from './FocusHistory';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    // Added return statement
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on ?"
          onChangeText={setSubject} 
          style = {styles.textInput}/>
      </View>
      <View style= {styles.button}>
        <RoundedButton title='+' size={30} onPress={() => addSubject(subject)}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row'
  },
  inputContainer: {
    flex:1,
    paddingTop:50,
    paddingLeft: 20,
    justifyContent: 'top',
    color : colors.darkBlue,
    border:2, 
  },

  button:{
    color:colors.darkBlue,
    paddingTop:55,
    paddingLeft: 20,
    flex:0.2,
    justifyContent: 'top',
  }
});

export default Focus;
