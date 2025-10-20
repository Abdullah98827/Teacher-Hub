import React, { useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';

interface CollapsibleProps {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
}

export function Collapsible({ children, title = 'Toggle', open = false }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(open);
  const animatedHeight = new Animated.Value(open ? undefined : 0);

  const toggle = () => {
    if (isOpen) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.spring(animatedHeight, {
        toValue: 1000, // Adjust if content is taller
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View>
      <Pressable onPress={toggle}>
        <Text>{title}</Text>
      </Pressable>
      <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
        {isOpen && <View>{children}</View>}
      </Animated.View>
    </View>
  );
}