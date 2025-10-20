import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { supabase } from '../supabase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleSignup = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Check your email for confirmation!', [
        { text: 'OK', onPress: () => router.push('/login') }
      ]);
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white" style={{ paddingTop: insets.top }}>
      <Text className="text-2xl font-bold text-center mb-5">Sign Up</Text>
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
      <TouchableOpacity className="bg-blue-500 p-4 rounded-md mb-3 disabled:opacity-50" onPress={handleSignup} disabled={loading}>
        <Text className="text-white text-center font-bold">{loading ? 'Signing up...' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <Link href="/login" asChild>
        <TouchableOpacity className="p-3">
          <Text className="text-center text-blue-500">Already have an account? Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}