import { Platform, SafeAreaView, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1,paddingTop:Platform.OS==='android'?50:0,
    backgroundColor:'white' }}>
      <View style={{ flex: 1 }}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}
