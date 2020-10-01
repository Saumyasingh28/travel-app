import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import blogs from '../fakeData/recommended.json';
import ExploreCard from './ExploreCard';
import europeBlogs from '../fakeData/europe.json';
import featuredBlogs from '../fakeData/featured.json';
import FeaturedCard from './FeaturedCard';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

class ExploreScreen extends React.Component<any, any> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Container>
          <Text style={styles.boldText}>Explore</Text>
          <Feather name="search" size={28} />
        </Container>
        <ScrollView>
          <Text style={styles.header}>Recommended</Text>
          <ScrollView horizontal={true}>
            {blogs.map((blog, index) => (
              <ExploreCard blog={blog} key={index} />
            ))}
          </ScrollView>
          <Text style={styles.header}>In Europe</Text>
          <ScrollView horizontal={true}>
            {europeBlogs.map((blog, index) => (
              <ExploreCard blog={blog} key={index} />
            ))}
          </ScrollView>
          <Text style={styles.header}>Featured</Text>
          <ScrollView>
            {featuredBlogs.map((blog, index) => (
              <FeaturedCard blog={blog} key={index} />
            ))}
          </ScrollView>
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
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 20,
  },
});

export default ExploreScreen;
