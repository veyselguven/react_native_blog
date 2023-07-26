import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const blogPost = useContext(BlogContext);
  console.log(blogPost);
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={blogPost}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text> {item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
