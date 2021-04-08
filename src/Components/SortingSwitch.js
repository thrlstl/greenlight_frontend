import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { useSelector, useDispatch } from 'react-redux';
import { filterByApprovedPhotos, filterByDisapprovedPhotos, selectCollection } from '../Actions/collections'

import API from './API'
const apiURL = API()

function SortingSwitch(props) {

    const collection = useSelector(state => state.collection)
    const dispatch = useDispatch()

    const handleFilter = (value) => {
      fetch(`${apiURL}collections/${collection.id}`)
      .then(resp => resp.json())
      .then(collection => {
        value === 'approved'
        ? dispatch(filterByApprovedPhotos(collection))
        : ( value === 'disapproved'
        ? dispatch(filterByDisapprovedPhotos(collection))
        : dispatch(selectCollection(collection)) )
      })
    }

    return (
        <View style={styles.container}>
          <View style={styles.topNavContainerStack}>
            <View style={styles.topNavContainer}></View>
            <View style={styles.toggleContainer}>
              <SwitchSelector
              initial={1}
              onPress={(value) => handleFilter(value)}
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

export default SortingSwitch;

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
      width: 150,
      marginTop: 53,
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
      borderColor: "#000000"
    },
    notApprovedText: {
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
      borderColor: "#000000"
    },
    approvedText: {
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
