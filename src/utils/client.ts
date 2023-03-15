import createBridgeClient from '@lombard/bridge-sdk';
import { env } from '../env/server.mjs';

export const bridgeClient = createBridgeClient(
  env.BRIDGE_SDK_KEY,
  env.BRIDGE_SDK_SECRET,
  env.BRIDGE_SDK_APIVERSION
);
