import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 justify-center items-center bg-blue-100" style={{ paddingTop: insets.top }}>
      <Text className="text-2xl font-bold text-blue-600">Dashboard</Text>
      <Text className="text-base text-gray-600 mt-4">Your teacher dashboard content goes here.</Text>
    </View>
  );
}