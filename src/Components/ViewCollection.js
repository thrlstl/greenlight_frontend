import React from 'react';
import {
  StyleSheet,
  View
} from "react-native";
import { useSelector } from 'react-redux';
import GridList from 'react-native-grid-list';
import TopNavigation from './TopNavigation'
import PhotoItem from './PhotoItem'

function ViewCollection() {

  const collection = useSelector(state => state.collection)

  const renderItem = ({ item, index }) => (
      <PhotoItem 
      // {...item} 
      item={item}
      key={index}/>
  );

  return (
    <View style={styles.container}>
      <TopNavigation />
        <GridList
        showSeparator
        data={collection.photos}
        numColumns={1}
        renderItem={renderItem}
        itemStyle={styles.photoContainer}
        />
    </View>
  );
}

export default ViewCollection;

// STYLES
// Designed with BuilderX by Matthew Steele.

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
