/* eslint-disable import/no-extraneous-dependencies */
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth';
//
const { chains, provider } = configureChains([mainnet, polygon], [publicProvider()]);
const { connectors } = getDefaultWallets({ appName: 'MYTY STUDIO', chains });
//
export const wagmiClient = createClient({ autoConnect: true, connectors, provider });
//
const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `MYTY STUDIO`,
});

type RainbowWalletProviderProps = { children: JSX.Element };
//
const RainbowWalletProvider = ({ children }: RainbowWalletProviderProps): JSX.Element => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </RainbowKitSiweNextAuthProvider>
  </WagmiConfig>
);

export default RainbowWalletProvider;
