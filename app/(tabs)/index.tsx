import { Text, View } from "react-native";
import "@/global.css";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Recurrly
      </Text>
      <Link href="/onboarding" className="mt-4 rounded-lg bg-primary text-white p-4">Go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-lg bg-primary text-white p-4">Go to sign in</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-lg bg-primary text-white p-4">Go to sign up</Link>
      <Link href="/(tabs)/subscriptions/spotify" className="mt-4 rounded-lg bg-primary text-white p-4">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "claude"}
        }} className="mt-4 rounded-lg bg-primary text-white p-4">Claude Max Subscription</Link>
    </View>
  );
}