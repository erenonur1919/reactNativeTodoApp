import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('.././assets/images/background.jpg')}
        style={styles.background}>
        <View style={styles.overlay} />
        <Text style={styles.text}>ToDo App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Todo')}>
          <Text style={styles.btnText}>Get Started</Text>
          <Icon
            style={styles.icon}
            size={20}
            color="black"
            name="arrow-right"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 28,
    color: '#333',
  },
  icon: {
    paddingLeft: 15,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
