import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import Card from './Card';
import blogs from '../fakeData/blogs.json';
//import MyTabs from '../routes/bottomTabs';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

class FeedScreen extends React.Component<any, any> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <Text style={styles.boldText}>Feed Screen</Text>
          <Feather name="search" size={28} />
        </Container>
        <ScrollView>
          {blogs.map((blog, index) => (
            <Card blog={blog} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default FeedScreen;
