import { FlexBoxProps, FlexRow } from '@xylabs/react-flexbox'

/**
 * @deprecated The functionality of Background is now part of FlexBox.  Use the 'background' property to enable the background.
 */
const Background: React.FC<FlexBoxProps> = (props) => {
  return <FlexRow {...props} />
}

export { Background }
