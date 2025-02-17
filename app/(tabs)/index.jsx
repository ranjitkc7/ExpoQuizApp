import { View, Text, FlatList } from "react-native";
import React from "react";
import questions from "../../data/questions.json";

const MainPage = () => {
  const renderItem = ({ item }) => {
    return (
      <View className=" border-b-[1px] border-[#003049] p-[2px] pb-[1rem]">
        <Text className="text-[1.2rem]">{`${item.id}.  ${item.question}`}</Text>
        <Text className="text-[12px] pl-[1rem] font-serif font-[700]">{item.answer}</Text>
      </View>
    );
  };
  return (
    <View className="h-screen bg-[#ffe5ec] p-[4px]">
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

export default MainPage;
