import { Tabs } from 'expo-router/tabs';
import "../global.css";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="two" options={{ title: 'Profile' }} />
    </Tabs>
  );
}