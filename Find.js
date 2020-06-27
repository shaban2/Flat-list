import React, { useState, useEffect } from "react";
import { Text, View, FlatList, SafeAreaView, TextInput } from "react-native";

export default FindApi = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((res) => {
        setPeople(res);
      });
  }, [people]);

  useEffect(() => {
    searchFilterFunction = (text) => {
      const newData = people.filter((item) => {
        const itemData = `${item.email}`;

        const textData = text;

        return itemData.indexOf(textData) > -1;
      });

      setPeople(newData);
    };
  });

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          paddingLeft: 10,
          borderColor: "#009688",
          backgroundColor: "#FFFFFF",
        }}
        placeholder="Search Here"
        onChangeText={(text) => this.searchFilterFunction(text)}
      />
      <FlatList
        ItemSeparatorComponent={this.FlatListItemSeparator}
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
