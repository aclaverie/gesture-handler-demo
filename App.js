import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <PanGestureHandler
      onGestureEvent={(gestureEvent) => {
        let transX = gestureEvent.nativeEvent.translationX;
        let transY = gestureEvent.nativeEvent.translationY;
        console.log(`X: ${transX}, Y: ${transY}`);
        // console.log(gestureEvent.nativeEvent);
        
      }}>
      <View style={styles.container}>
        
      </View>
    </PanGestureHandler>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
