import { EthAccountBase } from './EthAccountBase'
import { EthAccountProps } from './EthAccountProps'
import { EthAccountTo } from './EthAccountTo'

const EthAccount: React.FC<EthAccountProps> = ({ to, toOptions, ...props }) => {
  if (to || toOptions) {
    return <EthAccountTo to={to} toOptions={toOptions} {...props} />
  } else {
    return <EthAccountBase {...props} />
  }
}

export { EthAccount }
