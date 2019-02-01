import React from 'react'

import { Text, StyleSheet, View, Animated, Easing, Button } from 'react-native'

class AnimatedOpacity extends React.Component {


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
            easing: Easing.bounce

        }).start()
    }


    render() {
        return (
            <View>
                <Animated.View
                /*   style={{
                    left: this.redSquare.x,
                    top: this.redSquare.y 
                    }} */
                    style={{opacity: this.state.redSquare}}
                >
                    <View style={styles.square}>
                        <Text>Hello</Text>
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

export default AnimatedOpacity