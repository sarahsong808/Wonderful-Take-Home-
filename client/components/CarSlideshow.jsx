import React from 'react';
// import Carousel from 'react-native-snap-carousel';
import sport from '../assets/ls-f-sport.jpg';
import hybrid from '../assets/ls-hybrid.jpg';
import ls from '../assets/ls.jpg';

const CarSlideshow = props => {

    // _renderItem = ({item, index}) => {
    //     return (
    //         <View style={styles.slide}>
    //             <Text style={styles.title}>CARRRRR</Text>
    //         </View>
    //     );
    // }

    // render () {
    //     return (
    //         <Carousel layout={'default'}
    //           ref={(c) => { this._carousel = c; }}
    //           data={this.state.entries}
    //           renderItem={this._renderItem}
    //           sliderWidth={sliderWidth}
    //           itemWidth={itemWidth}
    //         />{sport}
    //     );
    // }
    
    return (
        <div>
        <img src={sport} />
        <img src={hybrid} />
        <img src={ls} />
        </div>
    )
}

export default CarSlideshow;