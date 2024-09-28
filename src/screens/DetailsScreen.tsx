// screens/DetailsScreen.tsx
import React from 'react';
import { View, Button, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../../AppStyle';
import TextScrambleComponent from '../components/TextScrambleComponent';
import ImgAnimationComponent from '../components/ImgAnimationComponent';

const skeletonIdlePaths = {
  img1: require('../assets/images/skeleton/idle/idle1.png'),
  img2: require('../assets/images/skeleton/idle/idle2.png'),
  img3: require('../assets/images/skeleton/idle/idle3.png'),
  img4: require('../assets/images/skeleton/idle/idle4.png'),
  img5: require('../assets/images/skeleton/idle/idle5.png'),
  img6: require('../assets/images/skeleton/idle/idle6.png'),
  img7: require('../assets/images/skeleton/idle/idle7.png'),
};

type DetailsScreenNavigationProp = StackNavigationProp<
  { Home: undefined; Details: undefined },
  'Details'
>;

type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen = ({ navigation }: DetailsScreenProps) => (
  <View style={styles.app}>
    <TextScrambleComponent
      phrases={['Details Screen', 'Welcome to the details!']}
      enableReturnValue={false}
    />
    <ImgAnimationComponent path={skeletonIdlePaths} enable={true} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

export default DetailsScreen;
