import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect } from 'react-redux';

class TopNavigation extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <View style={styles.container}>
              <View style={styles.topNavContainerStack}>
                <View style={styles.topNavContainer}></View>
                {/* <TouchableOpacity style={styles.notApprovedButton}>
                  <Text style={styles.notApprovedText}>Not Approved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.approvedButton}>
                  <Text style={styles.approvedText}>Approved</Text>
                </TouchableOpacity> */}
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

// const mapDispatchToProps = {
//   loginSuccess
// }

export default connect(mapStateToProps, null) (TopNavigation)

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
