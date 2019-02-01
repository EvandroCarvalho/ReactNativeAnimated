import React from 'react'

import { Text, StyleSheet, View, Animated, Easing, Button } from 'react-native'

class AnimatedText extends React.Component {


    // where is it
    // where is gonna be
    // which comp

    state = {
        redSquare: new Animated.Value(1)
    }

    componentWillMount() {
        
    }

    runAnim = () => {
        Animated.timing(this.state.redSquare, {   //where is gonna be
            toValue:0,
            duration: 2000,
            delay: 1000,
          //  easing: Easing.bounce

        }).start()
    }


    render() {
        return (
            <View>
                <Animated.View
                    style={{
                        opacity: this.state.redSquare,
                        transform: [{
                            rotateX:this.state.redSquare.interpolate({
                                inputRange:[0, 0.5, 1],
                                outputRange:['0deg', '180deg', '0deg']
                            })
                        }]
                    }}
                >
                    <View style={styles.square}>
                        <Animated.Text
                            style={{
                                fontSize: this.state.redSquare.interpolate({
                                  inputRange:[0,0.5,1],
                                  outputRange:[20,5,30]  
                                })
                            }}
                        >
                            <Text>Hello</Text>
                        </Animated.Text>
                    </View>
                </Animated.View>

                <Button
                    title='start animation'
                    onPress={this.runAnim}
                />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: '#f00',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AnimatedText