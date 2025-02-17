import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router"; 

const ResultsPage = () => {
  const { score, attempt, correct, wrong, omitted, totalQuestion } =
    useLocalSearchParams();
  return (
    <View className="h-screen p-[1rem] items-center bg-[#ffe5ec]">
      <Text className="text-[1.5rem] font-[600] font-serif">
        " Congratulation! You Obtain : "
      </Text>
      <View
        className="h-[15rem] w-[15rem] bg-[#003049] rounded-full 
       items-center justify-center mt-[12px]"
      >
        <Text className="text-[7rem] font-[700] text-white font-serif">
          {score}
        </Text>
      </View>
      <View className="mt-[2rem] h-[12rem] w-full bg-[#003049] p-[1rem] rounded-[5px]">
        <Text className="text-white text-[1.2rem]">Total Score  : {score}</Text>
        <Text className="text-white text-[1.2rem]">
          Attempt Question  : {attempt}
        </Text>
        <Text className="text-white text-[1.2rem]">
          Correct Answer  : {correct}
        </Text>
        <Text className="text-white text-[1.2rem]">Wrong Answer  : {wrong}</Text>
        <Text className="text-white text-[1.2rem]">Ommitted  : {omitted}</Text>
        <Text className="text-white text-[1.2rem]">
          Total Question  : {totalQuestion}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#003049] mt-[1rem] items-center justify-center 
      h-[3rem]  rounded-md  w-full"
        onPress={() => {
          score = 0,
          attempt = 0,
          correct = 0,
          wrong = 0,
          omitted = 0,
          totalQuestion = 0
        }}
      >
        <Text className="text-white font-[700] text-[1.2rem]">Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsPage;
