import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  // console.log(blogPost);
  return (
    <View>
      <Text>IndexScreen</Text>
      {/*  onPress={() => addBlogPost()} */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text> {item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
