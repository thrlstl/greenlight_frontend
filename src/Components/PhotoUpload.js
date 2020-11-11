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

// import { directUpload } from 'react-native-activestorage';

import axios from 'axios';
import { AssetsSelector } from 'expo-images-picker';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const directUploadsUrl = 'https://localhost:3001/rails/active_storage/direct_uploads';


class PhotoUpload extends React.Component {
    constructor(props){
        super(props)
    }

    createPhoto = (photoData) => {
        // const formData = new FormData()
        // const photo = photoData
        // const collection_id = this.props.collection.id
        // console.log(photoData)

        // console.log(photo)
        // formData.append('photo', photo)
        // formData.append({
        //     'photo': photo,
        //     // 'collection_id': collection_id
        // })
        // console.log(formData)
        
        // axios.post(`http://localhost:3001/photos`, formData)

        const URI = photoData.uri
        var formData = new FormData();
        // var blob = new Blob([photoData], { type: 'photo'});
        // Uint8ClampedArray.from()

        formData.append('photo', {
            uri: URI,
            name: `photo.jpg`,
            type: `image/jpg`
        });
        formData.append('collection_id', this.props.collection.id);

        fetch(`http://localhost:3001/photos`, {
            method: 'POST',
            // headers: {'Content-Type': 'multipart/form-data'},
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        // console.log(formData)
    }


    goBack = () => {
        this.props.navigation.goBack()
    }

    onDone = (data) => {
        console.log(data)
        // data.map(photoData => {
        //     this.createPhoto(photoData.blob())
        // })
    } 

  render(){
    return (
        <SafeAreaView style={styles.container}>
            <AssetsSelector
                options={{
                base64: true,
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
                    doneFunction: data => this.onDone(data),
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



