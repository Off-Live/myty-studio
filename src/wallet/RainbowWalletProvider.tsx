/* eslint-disable import/no-extraneous-dependencies */
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains([mainnet, polygon], [publicProvider()]);
const { connectors } = getDefaultWallets({ appName: 'MYTY STUDIO', chains });

export const wagmiClient = createClient({ autoConnect: true, connectors, provider });

type RainbowWalletProviderProps = { children: JSX.Element };

const RainbowWalletProvider = ({ children }: RainbowWalletProviderProps): JSX.Element => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
  </WagmiConfig>
);

export default RainbowWalletProvider;
