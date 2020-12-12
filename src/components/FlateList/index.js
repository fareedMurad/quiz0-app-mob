// import React, { useEffect, useState, Component } from 'react';
// import { Animated, FlatList, Image, StyleSheet, ScrollView, Dimensions, ImageBackground, View, TouchableOpacity } from 'react-native';

// import { Block } from '../Block';
// import { Text } from '../Text';


// const { width, height } = Dimensions.get('window');
// scrollX = new Animated.Value(0);

// export default class FlateList extends Component {
// state={
//     fgf:''
// }
// renderIllustrations() {
//     const { illustrations,data } = this.props;

//     return (
//         <FlatList
//             horizontal
//             pagingEnabled
//             scrollEnabled
//             showsHorizontalScrollIndicator={false}
//             scrollEventThrottle={16}
//             snapToAlignment="center"
//             data={data}
//             extraDate={this.state}
//             keyExtractor={(item, index) => `${item.id}`}
//             renderItem={({ item }) => (
//                 // <Block>
//                     <Image
//                         source={item.source}
//                         resizeMode="contain"
//                         style={{ width: width/10 , height: height / 2.5, overflow: 'visible' }}
//                     />
//                     /* <Text>{item.name}</Text>
//                     <Text>{item.id}</Text>     */

//                 /* </Block> */
//             )}
//             onScroll={
//                 Animated.event([{
//                     nativeEvent: { contentOffset: { x: this.scrollX } }
//                 }])
//             }
//         />
//     )
// }

// render(){
//     return(
//         <Block>
//         <Text>ajkfkadhsfka</Text>
//             {this.renderIllustrations()}
//         </Block>
//     )
// }
// }

// FlateList.defaultProps = {
//     illustrations: [
//         { id: 1, source: require('../assets/images/1.jpg') },
//         { id: 2, source: require('../assets/images/4.jpg') },
//         { id: 3, source: require('../assets/images/3.png') },
//     ],
// };

