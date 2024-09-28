// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../AppStyle';

type HomeScreenNavigationProp = StackNavigationProp<
  { Home: undefined; Details: undefined },
  'Home'
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View style={styles.app}>
    <Text
      style={styles.text}
      {...(Platform.OS === 'web'
        ? { 'aria-label': 'Home Screen' }
        : { accessibilityLabel: 'Home Screen' })}
    >
      Home Screen
    </Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);

export default HomeScreen;
