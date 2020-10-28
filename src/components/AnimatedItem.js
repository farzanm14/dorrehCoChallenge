import React from 'react';
import { Text, Dimensions, Animated } from 'react-native';
import listStyles from '../styles/listStyles'
const height = Dimensions.get('window').height;

function AnimatedItem({ item, index, y }) {
    const CARD_HEIGHT = 130;
    const position = Animated.subtract(index * CARD_HEIGHT, y)
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    const isAppearing = height;
    const translateY = Animated.add(
        y,
        y.interpolate({
            inputRange: [0, 0.00001 + index * CARD_HEIGHT],
            outputRange: [0, -index * CARD_HEIGHT],
            extrapolateRight: 'clamp',
        })
    );
    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolateRight: 'clamp',
    })
    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0.5, 1, 1, 0.5],
        extrapolateRight: 'clamp',
    })

    return (
        <Animated.View style={[listStyles.card, listStyles.itemContainer,
        {
            opacity,
            transform: [
                { translateY },
                { scale }
            ]
        }]} key={index}>
            <Text style={listStyles.primaryText}>{item.username}</Text>
            <Text style={listStyles.detailText}>email: {item.email}</Text>
            <Text style={listStyles.detailText}>phone: {item.phone}</Text>
            <Text style={listStyles.detailText}>website: {item.website}</Text>
        </Animated.View>
    )
}
export default AnimatedItem;
