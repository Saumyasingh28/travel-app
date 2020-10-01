import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView, Text, ImageBackground } from 'react-native';

class FeaturedCard extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={{ uri: `${this.props.blog.blogImage}` }}
          style={styles.blogImage}
          imageStyle={{ borderRadius: 8 }}
        >
          <Text style={styles.textStyle}>{this.props.blog.place}</Text>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  blogImage: {
    height: 200,
    width: '95%',
    position: 'relative',
    top: 2,
    left: 2,
    margin: 20,
    marginTop: 0,
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 10,
    fontSize: 20,
  },
});

export default FeaturedCard;
