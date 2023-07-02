/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, TextInput, StyleSheet, FlatList, Button} from 'react-native';
import GridView from './components/GridView';
import axios from 'axios';

const URL_API = 'https://api.themoviedb.org/3/movie/popular?api_key=38889b4852007755b057523ae6427fe3';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=38889b4852007755b057523ae6427fe3&query=';

const api = axios.create({
  baseURL: URL_API
});
const api_search = axios.create({
  baseURL: SEARCH_URL,
});
const App = () => {
const [films, setFilms] = useState([]);
const [numPage, setNumPage] = useState(1);
const [kw, setKw] = useState('');
useEffect(
  ()=>{
    //-------------------------------
    const getFilms = async () => {
      api.get('',{params:{
        page: numPage,
      }})
      .then(
        rep => setFilms(rep.data.results)
      )
    }
    //-------------------------------
    if (kw === ''){
      getFilms();
    }

  },[films, numPage, kw]
);
//---------------------------------------------
const rechercher = async (motCle) => {
  api_search.get(motCle)
  .then(
    rep => setFilms(rep.data.results)
  );
 };

  //-----------------------------------------
  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={{flexDirection: 'row', padding: 10}}>
      <TextInput
        style={{borderWidth:1, borderColor: '#841584', fontSize:20, width:'60%', height: 50, marginRight:5}}
        onChangeText={(value)=> setKw(value)}
      />
        <View style={{width:'35%', height:50, margin:5}}>
          <Button
            onPress={()=>{rechercher(kw);}}
            title="Rechercher"
            color="#841584"/>
        </View>
      </View>
      <FlatList
        data={films}
        renderItem={({item}) => <GridView title={item.title} pic = {IMG_URL + item.poster_path} date={item.release_date} overview = {item.overview} />}
        numColumns={2}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection: 'row', marginRight:10}}>
        <View style={{width:'45%', height:50, margin:10}}>
          <Button
            onPress={()=>{setNumPage(numPage - 1)}}
            title="<<"
            color="#841584"/>
        </View>
        <View style={{width:'45%', height:50, margin:10}}>
          <Button
            onPress={()=>{setNumPage(numPage + 1)}}
            title=">>"
            color="#841584"/>
        </View>
</View>
    </SafeAreaView>

  );

};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
