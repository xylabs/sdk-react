import { OpenInNewOutlined } from '@mui/icons-material'
import { Alert, AlertTitle } from '@mui/material'
import { Meta } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'

import { EthWalletSBComponent } from '../../../components'
import { useTrustWallet } from './use'

const UseTrustSBComponent = () => {
  const hookState = useTrustWallet()
  return (
    <FlexCol alignItems="start" gap={2}>
      {window !== window.parent ? (
        <Alert severity={'warning'}>
          <AlertTitle>Must test outside of iframe</AlertTitle>
          The Trust wallet does not allow the the permissions for to work from a nested iframe. Look for the <OpenInNewOutlined /> icon in the upper
          right.
        </Alert>
      ) : null}
      <EthWalletSBComponent {...hookState} />
    </FlexCol>
  )
}

const StorybookEntry = {
  argTypes: {},
  component: UseTrustSBComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/third-party/Trust',
} as Meta<typeof UseTrustSBComponent>

const Template = () => <UseTrustSBComponent />

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
