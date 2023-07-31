import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  //   const id = navigation.getParam("id");
  //   console.log("id", id);
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

// return {
//   headerRight: () => (
//     <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
//       <EvilIcons name="pencil" size={35} />
//     </TouchableOpacity>
//   ),
// };

const styles = StyleSheet.create({});
export default ShowScreen;
