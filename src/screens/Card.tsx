import * as React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { Avatar, Divider } from 'react-native-elements';
import { Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  padding-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.View`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

class Card extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <Container>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar
              rounded
              source={{
                uri: `${this.props.blog.userImage}`,
              }}
              size="medium"
            />
            <Details>
              <Text style={styles.boldText}>{this.props.blog.username}</Text>
              <Text style={styles.lightText}>{this.props.blog.place}</Text>
            </Details>
          </View>
          <Feather name="plus-circle" size={28} />
        </Container>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${this.props.blog.blogImage}`,
            }}
            style={styles.blogImage}
          />
        </View>
        <View style={styles.options}>
          <Feather name="heart" size={28} style={styles.iconStyle} />
          <Feather name="message-circle" size={28} style={styles.iconStyle} />
          <Feather name="send" size={28} style={styles.iconStyle} />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.likesCount}>
          <Icon name="favorite" size={16} style={{ marginRight: 10 }} />
          <Text style={styles.text}>{this.props.blog.likeCount} likes</Text>
        </View>
        <View style={styles.commentsSection}>
          <Text style={styles.text && styles.grayText}>
            <Text style={styles.boldText}>{this.props.blog.username}</Text> One
            of the best ways to make a great vacation quickly horrible is to
            choose the wrong accommodations for your trip.
          </Text>
        </View>
        <View style={styles.likesCount}>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            style={{ marginRight: 10, color: '#A8B6C8' }}
          />
          <Text style={{ color: '#A8B6C8' }}>
            {' '}
            See {this.props.blog.commentsCount} comments
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#323B45',
    fontSize: 14,
  },
  grayText: {
    color: '#5C6979',
  },
  lightText: {
    color: '#A8B6C8',
  },
  blogImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  imageContainer: {
    margin: 20,
    marginTop: 0,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  iconStyle: {
    marginRight: 30,
  },
  divider: {
    backgroundColor: 'lightgray',
    margin: 20,
    fontSize: 2,
  },
  likesCount: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  commentsSection: {
    margin: 20,
    display: 'flex',
  },
});

export default Card;
