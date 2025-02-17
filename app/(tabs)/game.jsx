import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import questions from "../../data/questions.json";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const { id, question, options, answer } = questions[currentIndex];

  const handleNext = () => {
    if (selectedOption === answer) {
      setScore(score + 5);
    } else if (selectedOption !== options) {
      setScore((prev) => prev);
    }else{
        setScore(score - 2);
    }
    if (currentIndex < questions.length - 1) {
      setcurrentIndex(currentIndex + 1);
    } else {
      Alert.alert("Game Over", "You have completed the game");
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };
  return (
    <View
      className="flex-1 items-center p-[1rem] justify-start
     bg-[#fdf0d5] h-screen"
    >
      <View
        className="h-[10rem] w-[10rem] rounded-full bg-[#003049] 
       flex items-center justify-center"
      >
        <Text
          className="font-[700] text-[6rem] text-white font-serif
         text-center"
        >
          {score}
        </Text>
      </View>
      <View className="h-[23rem] realtive w-full mt-[1rem] rounded-md bg-[#00f5d4] p-[10px]">
        <Text className="text-[1.4rem]">{`${id}.  ${question}`}</Text>
        <View className="pt-[12px] pl-[13px]">
          {options.map((option, index) => {
            return (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center p-[7px] m-[3px] rounded-md  ${
                  selectedOption === option
                    ? "border-[#003049] bg-[#003049]"
                    : "border-[#00f5d4] bg-[#00f5d4]"
                }`}
                onPress={() => setSelectedOption(option)}
              >
                <View
                  className={`w-[20px] h-[20px] rounded-full border-2 ${
                    selectedOption === option
                      ? "border-white bg-white"
                      : "border-gray-500"
                  }`}
                />
                <Text
                  className={`ml-[10px] text-[1.1rem] ${
                    selectedOption === option ? "text-white" : "text-black"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.3}
          className="bg-[#003049] items-center justify-center absolute bottom-2 right-2
      h-[3rem]  rounded-md  w-[5rem]"
          onPress={handleNext}
        >
          <Text className="text-white font-[700] text-[1.2rem]">Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          className="bg-[#003049] items-center justify-center absolute bottom-2 left-2
      h-[3rem]  rounded-md  w-[5rem]"
          onPress={handlePrev}
        >
          <Text className="text-white font-[700] text-[1.2rem]">Prev </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#003049] mt-[1rem] items-center justify-center 
      h-[3rem]  rounded-md  w-full"
        onPress={() => setScore(0)}
      >
        <Text className="text-white font-[700] text-[1.2rem]">Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GamePage;
