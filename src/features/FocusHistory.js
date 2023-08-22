import React from 'react';
import {View, Text, StyleSheet,  FlatList,} from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';



export const FocusHistory = ({history}) => {
  const renderItem = ({item}) => <Text> -{item}</Text>;
  if (!history || !history.length) 
    return (
      <Text style={styles.title}> We haven't focus on anything yet...</Text>
      );
    
    return(
    <View style= {styles.container}>
      <Text style={styles.title}>Things we have focus on:</Text>
      <FlatList data={history} renderItem={renderItem}/>
    
    </View>
    );
} 


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: spacing.md,
    
  },
  item:{
    paddingTop:spacing.sm, 
    fontSize: fontSizes.md,
    color: colors.darkBlue,
  },
  title:{
    color: colors.darkBlue,
    fontSize: fontSizes.md,
    padding : spacing.md,
    fontWeight:'bold',
    //textAlign : 'center',
  },

  
})