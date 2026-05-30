import { Text } from "react-native";
import { styled } from "nativewind"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import "@/global.css";
import { Link } from "expo-router";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold text-primary">
        Home
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-lg bg-primary font-sans-bold text-white p-4">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-lg bg-primary font-sans-bold text-white p-4">Go to sign in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-lg bg-primary font-sans-bold text-white p-4">Go to sign up</Link>
    </SafeAreaView>
  );
}