import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  // console.log(props);
  return (
    <View>
      {/*  onPress={() => addBlogPost()} */}
      {/*       <Button title="Add Post" onPress={addBlogPost} />
       */}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title}-{item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather
                  style={styles.icon}
                  name="trash"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
//   headerRight: (
//   <TouchableOpacity onPress={() => navigation.navigate("Create")}>
//   <Feather name="plus" size={24} color="black" />
// </TouchableOpacity>
// ),

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
