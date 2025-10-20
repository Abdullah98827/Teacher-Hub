import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { supabase } from '../supabase';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace('/(tabs)');
      } else {
        router.replace('/login');
      }
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}