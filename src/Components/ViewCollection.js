import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  SafeAreaView,
  Image
} from "react-native";

import GridList from 'react-native-grid-list';
import DoubleClick from 'react-native-double-click';
import Svg, { Ellipse } from "react-native-svg";


import TopNavigation from './TopNavigation'
import BottomNavigation from './Navigation';
import { connect } from 'react-redux';
import { loginSuccess } from '../Actions/auth.js';
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory';


class ViewCollection extends React.Component {
    constructor(){
        super()
    }

    // handleClick() {
    //     console.log('')
    //   }

    renderItem = ({ item, index }) => (
            <TouchableOpacity key={index}>
                <Image key={item.id} style={styles.image} source={{uri: `http://localhost:3001${item.photo}`}} />
                <View style={styles.rect}>
                    <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                    <TouchableOpacity style={styles.button1}></TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
      );

  render(){
    return (
            <View style={styles.container}>
                    <TopNavigation />
                    <GridList
                    showSeparator
                    data={this.props.collection.photos}
                    numColumns={2}
                    renderItem={this.renderItem}
                    itemStyle={styles.photoContainer}
                    />
                <BottomNavigation {...this.props} />
            </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection
    }
}

// const mapDispatchToProps = {
//   loginSuccess
// }

export default connect(mapStateToProps, null)(ViewCollection)

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 700,
   bottom: 0,
    //   flex: 1,
      backgroundColor: 'black'
    },
    photoContainer: {
      marginRight: 2,
      marginLeft: 0,
      marginBottom: 55,
      marginTop: 0
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 0,

    },
    rect: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        // flexDirection: "row"
      },
      button: {
        borderTopColor: 'white',
        width: '50%',
        height: '100%',
        backgroundColor: "rgba(255,225,225,1)"
      },
      button1: {
        width: '50%',
        height: '100%',
        backgroundColor: "rgba(225,255,230,1)"
      },
      buttonRow: {
        height: 62,
        width: '100%',
        flexDirection: "row",
        flex: 1
      }
  });
