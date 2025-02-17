import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import '../global.css';
import { useRouter } from 'expo-router';

const HomePage = () => {
   const router = useRouter();
  return (
    <View className="flex-1 items-center p-[1rem] justify-start bg-[#fdf0d5] h-screen">
      <TouchableOpacity className="bg-[#003049] h-[3rem] w-[10rem] rounded-md"
       onPress={() => router.push('/(tabs)')}
      >
        <Text className="font-[700] text-[1.4rem] py-[4px] text-center text-white ">Explore App</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage