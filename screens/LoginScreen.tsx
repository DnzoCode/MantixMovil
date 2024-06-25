import { View, Text,TextInput, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from '@expo/vector-icons';
const LoginScreen = () => {
  // const snapPoints = useMemo(() => ["55%", "80%"], [])
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    // <BottomSheet snapPoints={snapPoints}>
    //     <View>
    //         <LoginForm/>
    //     </View>
    // </BottomSheet>
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <View className="flex-1 flex justify-around mx-6">
        <View className="gap-4">
          <Ionicons name="arrow-back-sharp" size={34} color="black" onPress={() => router.back()} />
          <View >
            <Text className="font-extrabold text-5xl">
              Vamos a inciar Sesion!
            </Text>
          </View>
        </View>

        <View className="flex-col gap-4">
          <View>
            <Text className="font-bold text-xl">Correo electronico</Text>
            <TextInput
              className="p-6 border-4 border-gray-200 text-xl rounded-2xl"
              placeholder="Ingrese su correo electronico"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text className="font-bold text-xl">Contrasena</Text>
            <View className="flex-row items-center border-4 border-gray-200 rounded-2xl p-6 relative">
              <TextInput
                className="flex-1 text-xl"
                placeholder="Ingrese su contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
              />
              <TouchableOpacity
                className="absolute right-4"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <AntDesign name={isPasswordVisible ? "eye" : "eyeo"} size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            className="p-8 mx-7 rounded-xl"
            style={{ backgroundColor: Colors.dark.background }}
          >
            <Text className="text-center text-white text-2xl font-bold">
              Ingresar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
