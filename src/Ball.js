import React, { Component } from "react";
import { Animated, View } from "react-native";

export class Ball extends Component {
  componentWillMount = () => {
    this.position = new Animated.ValueXY(0, 0); //starting point
    Animated.spring(this.position, { // 
      toValue: { x: 200, y: 500 } // ending point
    }).start();
  };

  render() {
    return (
    //We always animate a view; Animated.View knows how to receive info about animation
      <Animated.View style={this.position.getLayout()}> 
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

//Animation system work separately from state system

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black"
  }
};

export default Ball;
