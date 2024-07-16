import { Alert, AlertTitle, List, ListItem, Snackbar } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import {
  AccountsChangedEventName,
  ChainChangedEventName,
  EIP6963Connector,
  onWalletSelect,
  WalletDiscoveryPaper,
  WalletDiscoveryPaperProps,
  WalletOverviewCard,
} from '@xylabs/react-crypto'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { useEffect, useState } from 'react'

const StorybookEntry = {
  args: {
    open: true,
  },
  component: WalletDiscoveryPaper,
  parameters: {
    actions: { argTypesRegex: '!(^on.*)' },
    docs: {
      page: null,
    },
  },
  title: 'wallets/Discovery/Paper',
} as Meta<typeof WalletDiscoveryPaper>

const Template: StoryFn<WalletDiscoveryPaperProps> = (args: WalletDiscoveryPaperProps) => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963Connector | undefined>()
  const [errorArray, setErrorArray] = useState<[string, Error][]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logErrorsInterval = setInterval(() => {
      const errorLogAsArray = selectedWallet ? [...selectedWallet.providerErrorLog] : []
      setErrorArray(errorLogAsArray as [string, Error][])
      console.log(errorLogAsArray)
    }, 1000)

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      clearInterval(logErrorsInterval as any)
    }
  }, [selectedWallet])

  const onWalletSelect: onWalletSelect = (eIP6963Connector) => {
    setSelectedWallet(eIP6963Connector)
  }

  const [event, setEvent] = useState<string>()

  useEffect(() => {
    const accountChangedListener = (event: CustomEventInit) => {
      setEvent(event.detail)
    }
    const chainChangedListener = (event: CustomEventInit) => {
      setEvent(event.detail)
    }

    window.addEventListener(AccountsChangedEventName, accountChangedListener)
    window.addEventListener(ChainChangedEventName, chainChangedListener)

    return () => {
      window.removeEventListener(AccountsChangedEventName, accountChangedListener)
      window.removeEventListener(ChainChangedEventName, chainChangedListener)
    }
  }, [])

  return (
    <FlexCol alignItems="start" gap={2}>
      <FlexRow justifyContent="start" alignItems="start" gap={4}>
        <WalletDiscoveryPaper onWalletSelect={onWalletSelect} {...args} />
        {selectedWallet?.rawProvider ?
          <WalletOverviewCard ethWalletConnector={selectedWallet} sx={{ width: '300px' }} />
        : null}
      </FlexRow>
      {selectedWallet ?
        errorArray.length > 0 ?
          <List>
            {errorArray.map(([walletName, error]) => (
              <ListItem key={walletName}>
                {walletName} - {error.message}
              </ListItem>
            ))}
          </List>
        : null
      : <Alert severity={'warning'}>Select a wallet to see its errors</Alert>}
      <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={!!event} autoHideDuration={5000} onClose={() => setEvent(undefined)}>
        <Alert severity="success">
          <AlertTitle>New Event</AlertTitle>
          {JSON.stringify(event, null, 2)}
        </Alert>
      </Snackbar>
    </FlexCol>
  )
}

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
