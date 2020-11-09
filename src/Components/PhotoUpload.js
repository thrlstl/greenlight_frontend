import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableHighlight
} from "react-native";

// import Swipeable from 'react-native-swipeable';
// import GridList from 'react-native-grid-list';
// import DoubleClick from 'react-native-double-click';

// import TopNavigation from './TopNavigation'
// import BottomNavigation from './Navigation';

// var RNFetchBlob = require('react-native-fetch-blob')
// import { directUpload } from 'react-native-activestorage';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class PhotoUpload extends React.Component {
    constructor(props){
        super(props)
    }

    createPhoto = (photo) => {
        console.log(photo)
    }


    goBack = () => {
        this.props.navigation.goBack()
    }

    onDone = (data) => {
        console.log(data)

        // const file = {
        // name: 'image.jpg',
        // size: 123456,
        // type: 'image/jpeg',
        // path: '/var/lib/...'
        // }

        // const directUploadsUrl = 'https://localhost:3001/rails/active_storage/direct_uploads';

        // directUpload({ file, directUploadsUrl }, ({ status, progress, cancel }) => {
        // // status - waiting/progress/finished/error
        // // progress - 0-100%
        // // cancel - function to stop uploading a file
        // });

    } 

  render(){
    return (
        <SafeAreaView style={styles.container}>
            <AssetsSelector
                options={{
                assetsType: ['photo'],
                noAssetsText: 'No media found.',
                // maxSelections: 10,
                margin: 2,
                portraitCols: 3,
                landscapeCols: 5,
                widgetWidth: 100,
                widgetBgColor: 'black',
                selectedBgColor: 'black',
                videoIcon: {
                    Component: Ionicons,
                    iconName: 'ios-videocam',
                    color: 'white',
                    size: 20,
                },
                selectedIcon: {
                    Component: Ionicons,
                    iconName: 'ios-checkmark-circle-outline',
                    color: 'black',
                    // bg: styles.selectedBgColor2,
                    size: 20,
                },
                defaultTopNavigator: {
                    continueText: 'Upload',
                    goBackText: 'Back',
                    buttonBgColor: 'white',
                    buttonTextColor: 'black',
                    midTextColor: 'black',
                    backFunction: this.goBack,
                    doneFunction: data => this.onDone,
                },
                // noAssets:{
                //     Component:CustomNoAssetsComponent
                // },
            }}
        />
        </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        collection: state.collection
    }
}

// const mapDispatchToProps = {
//   loginSuccess
// }

export default connect(mapStateToProps, null)(PhotoUpload)

const greenliteColor = 'rgba(169,255,218,1)'

const styles = StyleSheet.create({
    container: {
    width: '100%',
    height: '100%',
    },
    selectedBgColor2: {
        backgroundColor: greenliteColor,
        opacity: 0.6
    }
  });



