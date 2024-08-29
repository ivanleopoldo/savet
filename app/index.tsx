import { Button, XStack, YStack, Stack, View, Text } from "tamagui";
import { Airplay } from "@tamagui/lucide-icons";

const Page = () => {
  return (
    <View>
      <XStack>
        <Text>Hello</Text>
        <Button icon={Airplay}></Button>
      </XStack>
    </View>
  );
};

export default Page;
