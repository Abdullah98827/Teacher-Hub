import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { supabase } from '../supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });

      if (error) {
        Alert.alert('Login Error', error.message);
      } else if (data.session) {
        console.log('✅ Login successful');
        router.replace('/(tabs)');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white" style={{ paddingTop: insets.top }}>
      <Text className="text-2xl font-bold text-center mb-5">Login</Text>
      <TextInput
        className="border border-gray-300 p-3 mb-3 rounded-md"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="border border-gray-300 p-3 mb-3 rounded-md"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity 
        className={`bg-blue-500 p-4 rounded-md mb-3 ${loading ? 'opacity-50' : ''}`}
        onPress={handleLogin} 
        disabled={loading}
      >
        <Text className="text-white text-center font-bold">
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
      <Link href="/signup" asChild>
        <TouchableOpacity className="p-3">
          <Text className="text-center text-blue-500">Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}