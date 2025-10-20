import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { supabase } from '../supabase';

export default function Index() {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        console.log('✅ Session found, going to tabs');
        router.replace('/(tabs)');
      } else {
        console.log('❌ No session, going to login');
        router.replace('/login');
      }
    } catch (error) {
      console.log('❌ Session check error:', error);
      router.replace('/login');
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <ActivityIndicator size="large" color="#007AFF" />
      <Text className="mt-4 text-lg text-gray-600">Loading...</Text>
    </View>
  );
}