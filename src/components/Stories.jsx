import React from 'react';
import {Text, View} from 'react-native';
import {Thumbnail} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const Stories = () => {
  return (
    <>
      <View style={{flex: 3}}>
        <ScrollView horizontal={true}>
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto1.png')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto2.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto3.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto4.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto5.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto6.jpg')}
          />
          <Thumbnail
            style={{
              marginHorizontal: 5,
              borderColor: 'pink',
              borderWidth: 3,
            }}
            source={require('../assents/img/Foto1.png')}
          />
        </ScrollView>
      </View>
      <View style={{flex: 3}}>
        <ScrollView horizontal={true}>
          <Text style={{marginLeft: 12, marginRight: 12}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>Camila</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>Raquel</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>Pedro</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>Marcela</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>Lucas</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>André</Text>
          <Text style={{marginLeft: 12, marginRight: 12}}>André</Text>
        </ScrollView>
      </View>
    </>
  );
};
export default Stories;
