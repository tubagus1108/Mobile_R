import React from 'react'
import { Text, View, FlatList, Image, StyleSheet } from 'react-native'
import axios from 'axios'


export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Berita News',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  }
  constructor(){
    super();
    this.state = {
      articel : []
    }
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=07ace8b583bd4995bac1c3f847fc518f';
    axios.get(url).then((res) => this.setState({articel : res.data.articles})).catch((err) => console.log(err));
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 7 }}> Berita Hari Ini </Text>
        <FlatList 
          data={this.state.articel}
          renderItem={({item}) => {
            return (
              <View 
                style={{
                  flexDirection: 'column',
                  backgroundColor: '#c6cddf',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  // borderRadius: 3,
                  marginTop: 10,
                  // padding: 8
                }}>
                  <View 
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 8,
                    }}>
                    <Image source={{uri: item.urlToImage}} style={{width: 100, height: 100}}/>
                  </View>
                  <View 
                    style={{
                      flex:1,
                      alignItems: 'flex-start',
                      padding: 8,
                      borderBottomWidth: 1,
                      borderBottomColor: '#eeeeee',
                  }}>
                  <Text  
                    onPress={() => 
                      this.props.navigation.navigate('DetailNewsApi', 
                      { 
                        content: item.content,
                        title: item.title,
                        img: item.urlToImage
                      })
                  }>{item.title}</Text>
                </View>
              </View>
            )
          }}    
        />

      </View>
      
      
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eceff5',
    alignItems: 'center',
  },
})