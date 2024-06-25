import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const Page = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View className="flex-1 flex justify-around my-4">
        <View className="flex-row justify-center">
          <Image
            source={require("@/assets/images/ImgLogin.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className="justify-center items-center">
          <Text className="font-extrabold text-5xl text-center">
            Bienvenido a Mantix!
          </Text>
          <Text>App para la gestion de mantenimientos en tiempo real</Text>
        </View>

        <View className="space-y-4">
          <TouchableOpacity
            className="p-8 mx-7 rounded-xl"
            style={{ backgroundColor: Colors.dark.background }}
            onPress={() => router.navigate("/login")}
          >
            <Text className="text-center text-white text-2xl font-bold">
              Iniciar Sesion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page;
