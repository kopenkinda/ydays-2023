import React from "react";

import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-[#cc66ff]">T3</Text> Turbo
        </Text>

        <View className="py-2">
          <Text className="text-white">
            <Text className="font-semibold">Selected post:</Text>
          </Text>

          <Text className="font-semibold italic text-white">
            Press on a post
          </Text>
        </View>

        <SignOut />
      </View>
    </SafeAreaView>
  );
};
