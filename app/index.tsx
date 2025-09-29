import { Text, View, Pressable } from "react-native";
import { useState } from "react";

export default function Index() {
  const [contador, setcontador] = useState(0);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>

      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={(aumentador) => setcontador(contador + 1)} onLongPress={() => setcontador(0)}>
        <Text>contador: {contador}</Text>
      </Pressable>
      <Text>----------------------------------------------------------------------------------</Text>
      <Pressable  onPress={() => setcontador(contador -1)} onLongPress={() => setcontador(0)}>
        <Text>Resta: {contador}</Text>
      </Pressable>
    </View>
  );

  function aumentador() {
    setcontador(contador + 1);
  }
  function reset() {
    setcontador(contador - 1);
  }
}
