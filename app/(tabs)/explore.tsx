import { ScrollView, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">
          Explore Teacher Resources
        </Text>
        <View className="bg-white p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold mb-2">Lesson Plans</Text>
          <Text className="text-base text-gray-600 mb-2">
            Interactive lesson ideas for maths and science.
          </Text>
        </View>
        <View className="bg-white p-4 rounded-lg">
          <Text className="text-lg font-semibold mb-2">Student Tools</Text>
          <Text className="text-base text-gray-600">
            Quizzes and trackers for classroom use.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}