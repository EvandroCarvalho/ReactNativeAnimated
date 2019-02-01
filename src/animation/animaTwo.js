import React from 'react'

import { Text, StyleSheet, View, Animated, Easing, Button } from 'react-native'

class AnimaTwo extends React.Component {


    state = {
        first: new Animated.Value(1),
        redSquare: new Animated.ValueXY(0,0),
        blueSquare: new Animated.Value(1)
    }

    runAnim = () => {
        Animated.sequence([
            Animated.timing(this.state.first, {
                toValue:0
            }),
            Animated.parallel([
                Animated.spring(this.state.redSquare, {
                    toValue:{x:200, y:300}
                }),
                Animated.timing(this.state.blueSquare, {
                    toValue:0
                }),
            ])
        ]).start()
/*         Animated.sequence([
            Animated.timing(this.state.first, {
                toValue:0
            }),
            Animated.spring(this.state.redSquare, {
                toValue:{x:200, y:300}
            }),
            Animated.timing(this.state.blueSquare, {
                toValue:0
            })
        ]).start() */

/*         Animated.parallel([
            Animated.spring(this.state.redSquare, {
                toValue:{x:200, y:300}
            }),
            Animated.timing(this.state.blueSquare, {
                toValue:0
            })
        ]).start() */
    }


    render() {
        return (
            <View>
                <Animated.View
                    style={{
                        opacity:this.state.first
                    }}
                >
                    <View style={styles.first}>
                        <Text>Hello</Text>
                    </View>
                </Animated.View>
                <Animated.View
                    style={this.state.redSquare.getLayout()}
                >
                    <View style={styles.redSquare}>
                        <Text>Hello</Text>
                    </View>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity:this.state.blueSquare
                    }}
                >
                    <View style={styles.blueSquare}>
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
    redSquare: {
        backgroundColor: '#f00',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueSquare: {
        backgroundColor: '#0a90d0',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    first: {
        backgroundColor: '#0d0',
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AnimaTwo
