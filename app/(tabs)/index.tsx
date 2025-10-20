import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 items-center justify-center bg-yellow-100" style={{ paddingTop: insets.top }}>
      <View className="bg-white rounded-lg p-8 m-4 shadow-lg">
        <Text className="text-3xl font-bold text-red-600 mb-4 text-center">Hello, Abdullah!</Text>
        <Text className="text-base text-green-700 mb-6 text-center">Welcome to the Teacher-Hub.</Text>
      </View>
    </View>
  );
}