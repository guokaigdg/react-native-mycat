/**
 * ScreenHome/index.js
 */

// 引入依赖略

export default self => (
    <View>
      <Text style={{ fontSize: 36 }}>home</Text>
      <Button
        title="goSomePage1"
        // 路由跳转
        onPress={() => self.navigation.navigate("ScreenSome1")}
      />
    </View>
  );