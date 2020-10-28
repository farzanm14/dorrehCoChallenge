import React from 'react';
import { View, Text, FlatList, ActivityIndicator, Animated } from 'react-native';
import listStyles from '../styles/listStyles'
import AnimatedItem from './AnimatedItem'

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)

function AnimatedListComponent({ list, listName ,listLoading}) {
    const y = new Animated.Value(0) //drives the whole animation
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true })
   
    return (
        <View style={listStyles.listContainer}>
            <View><Text style={listStyles.listTitle}>{listName}</Text></View>
            <AnimatedFlatlist
                data={list}
                scrollEventThrottle={16}
                {...{ onScroll }}
                ListEmptyComponent={listLoading ? <ActivityIndicator color='blue' /> : <Text style={listStyles.emptyListText}>empty list</Text>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (<AnimatedItem y={y} item={item} index={index} />)}
            />
        </View>
    );
}

export default AnimatedListComponent;