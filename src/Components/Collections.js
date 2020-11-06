import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import Collection from './Collection';
import BottomNavigation from './Navigation';
import { selectCollection } from '../Actions/collections';

class Collections extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections: [1, 2, 3, 4, 5]
        }
    }

    selectCollection = (id) => {
      console.log(id)
      fetch(`http://localhost:3001/collections/${id}`)
      .then(resp => resp.json())
      .then(data => {
        this.props.selectCollection(data)
        this.props.navigation.navigate('View Collection')
      })
    }

    renderCollection = () => {
        return this.props.user.collections.map((collection, index) => {
            return(
              <TouchableOpacity key={index} onPress={() => this.selectCollection(collection.id)}>
                <Collection key={collection.id} {...collection} style={styles.collection} />
              </TouchableOpacity>
            )
        })
    }
    
    render(){
        return (
            <View style={styles.container}>
              <View style={styles.collectionsContainerStack}>
                <View style={styles.collectionsContainer}>
                  <ScrollView
                    horizontal={false}
                  >
                      {this.renderCollection()}
                  </ScrollView>
                  <BottomNavigation {...this.props} />
                </View>
              </View>
            </View>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
  selectCollection
}

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 600
  },
  collectionsContainer: {
    top: 0,
    width: 375,
    height: 700,
    position: "absolute",
    backgroundColor: greenliteColor,
    left: 1
  },
  collectionsContainerStack: {
    width: 376,
    height: 814,
    marginTop: 1,
    marginLeft: -1
  }
});


export default connect(mapStateToProps, mapDispatchToProps) (Collections);
