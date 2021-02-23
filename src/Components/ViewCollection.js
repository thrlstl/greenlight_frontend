import React from 'react';
import {
  StyleSheet,
  View
} from "react-native";

import GridList from 'react-native-grid-list';

import TopNavigation from './TopNavigation'
import BottomNavigation from './Navigation';
import { connect } from 'react-redux';
import PhotoItem from './PhotoItem'

const rightContent = <View 
style={{backgroundColor: '#ff7c7c', width: '100%', height: '100%'}}></View>;

class ViewCollection extends React.Component {
    constructor(props){
        super(props)
    }

    renderItem = ({ item, index }) => (
      <PhotoItem item={item} index={index} />
      );

  render(){
    return (
            <View style={styles.container}>
                    <TopNavigation />
                    <GridList
                    showSeparator
                    data={this.props.collection.photos}
                    numColumns={1}
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
        user: state.user,
        collection: state.collection
    }
}

export default connect(mapStateToProps, null)(ViewCollection)

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: 700,
   bottom: 0,
      backgroundColor: 'black'
    },
    toggleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    photoContainer: {
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 55,
      marginTop: 0
    },
    image: {
      borderRightWidth: 2,
      height: 350,
      borderRadius: 0,

    },
    rect: {
        backgroundColor: 'white',
        width: '100%',
        height: 77,
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
      caption: {
        justifyContent: 'center',
        width: '100%'
      },
      buttonRow: {
        height: 62,
        width: '100%',
        flexDirection: "row",
        flex: 1
      },
      approval: {
        backgroundColor: 'white'
      }
  });
