import React from 'react'

import AnimaOne from './src/animation/animaOne'
import { View, StyleSheet } from 'react-native'
import AnimaTwo from './src/animation/animaTwo';

class App extends React.Component {
    render() {
        return (   
          <View style={styles.container}>
            <AnimaTwo/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})



export default App
