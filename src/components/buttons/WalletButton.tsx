import { Button } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ConnectButtonProps } from '@rainbow-me/rainbowkit/dist/components/ConnectButton/ConnectButton';
import React from 'react';

const WalletButton = (props: ConnectButtonProps) => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === 'authenticated');
      const { chainStatus, showBalance } = props;
      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <Button onClick={openConnectModal} type="button" variant="contained">
                  Connect
                </Button>
              );
            }

            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
              );
            }

            return (
              <div style={{ display: 'flex', gap: 12 }}>
                <Button
                  onClick={openChainModal}
                  style={{ display: 'flex', alignItems: 'center' }}
                  type="button"
                >
                  {chain.hasIcon &&
                    (chainStatus?.valueOf() === 'full' || chainStatus?.valueOf() === 'icon') && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                  {chain.name}
                </Button>

                <Button onClick={openAccountModal} type="button" variant="outlined">
                  {account.displayName}
                  {account.displayBalance && showBalance?.valueOf()
                    ? ` (${account.displayBalance})`
                    : ''}
                </Button>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);

export default WalletButton;
