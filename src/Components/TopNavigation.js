import React, { Component } from "react";
import { Animated, StyleSheet, View, TouchableOpacity, Text, Animate } from "react-native";
import { connect } from 'react-redux';
import SwitchSelector from "react-native-switch-selector";
import { filterByApprovedPhotos } from '../Actions/collections'

class TopNavigation extends React.Component {
    constructor(props){
        super(props)
    }

    handleToggle = (value) => {
      if (value === 'disapproved') {
        this.handleDisapproved()
      }
      else if (value === 'all') {
        this.handleAll()
      }
      else if (value === 'approved') {
        this.props.filterByApprovedPhotos(this.props.collection)
        // this.handleApproved()
      }
    }

    handleDisapproved = () => {
      console.log('disapproved')
    }

    handleAll = () => {
      console.log('all')
    }

    handleApproved = () => {
      console.log('approved')
    }

    render(){

      const images = {
        heart: require('/Users/matthewsteele/Development/code/Mod5/final-project/front-end/GreenliteFrontend/src/assets/images/heart-icon.png')
      }
        return (
            <View style={styles.container}>
              <View style={styles.topNavContainerStack}>
                <View style={styles.topNavContainer}></View>
                <View style={styles.toggleContainer}>
                  <SwitchSelector
                  initial={1}
                  onPress={(value) => this.handleToggle(value)}
                  textColor={'black'} //'#7a44cf'
                  selectedColor={'white'}
                  borderRadius={20}
                  borderWidth={1}
                  valuePadding={0}
                  height={30}
                  borderColor={'black'}
                  backgroundColor={'white'}
                  hasPadding
                  options={[
                  { value: "disapproved", activeColor: '#fad1d1'}, //images.feminino = require('./path_to/assets/img/feminino.png')
                  { value: "all", activeColor: '#e1e1e1' },
                  { value: "approved", activeColor: '#d2fbe9' } //images.masculino = require('./path_to/assets/img/masculino.png')
                  ]}
                  />
                </View>
              </View>
            </View>
          );
    }
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection
    }
}

const mapDispatchToProps = {
  filterByApprovedPhotos
}

export default connect(mapStateToProps, mapDispatchToProps) (TopNavigation);

const styles = StyleSheet.create({
    container: {
      width: 374,
      height: 103
    },
    topNavContainer: {
      top: 0,
      left: 1,
      width: '100%',
      height: 100,
      position: "absolute",
      backgroundColor: "white"
    },
    toggleContainer: {
      left: 120,
      height: 36,
      // backgroundColor: "rgba(230, 230, 230,0.45)",
      width: 150,
      marginTop: 53,
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    notApprovedButton: {
      top: 56,
      left: 0,
      width: 188,
      height: 60,
      position: "absolute",
      backgroundColor: "rgba(255,202,209,1)",
      borderColor: "#000000",
      // borderTopWidth: 2,
      // borderBottomWidth: 2,
      // borderRightWidth: 2,
      // borderLeftWidth: 0
    },
    notApprovedText: {
      // fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 19,
      marginLeft: 51
    },
    approvedButton: {
      top: 56,
      left: 188,
      width: 188,
      height: 60,
      position: "absolute",
      backgroundColor: "rgba(169,255,218,1)",
      borderWidth: 0,
      borderColor: "#000000",
      // borderTopWidth: 2,
      // borderBottomWidth: 2
    },
    approvedText: {
      // fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 19,
      marginLeft: 64
    },
    topNavContainerStack: {
      width: 376,
      height: 117,
      marginTop: 0,
      marginLeft: 0
    }
  });
