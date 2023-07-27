import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  // console.log(blogPost);
  return (
    <View>
      <Text>IndexScreen</Text>
      {/*  onPress={() => addBlogPost()} */}
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text> {item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
