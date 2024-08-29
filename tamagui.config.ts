import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;

declare module "@tamagui/core" {
  interface TamaguiConfig extends Conf {}
}

export default tamaguiConfig;
