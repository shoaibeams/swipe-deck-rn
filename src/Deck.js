//Whenever user presses on screen and drag around with finger we use PanResponder or 
//gesture system. So three Questions: 
//1-what are we touching?; 2-What comp handles touch?; 3-How is gesture changing
import React, { Component } from "react";
import { Animated, View, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      }, //Link between gesture system and animated system
      onPanResponderRelease: () => {}
    });
    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
          key={item.id}
          style={this.state.position.getLayout()}
          {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;