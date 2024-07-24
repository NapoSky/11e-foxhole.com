import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const YoutubeIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <svg viewBox="0 0 24 24">
    <path
      d="M18.31,4.21C16.42,4.07,14.29,4,12,4s-4.42.07-6.31.21A4,4,0,0,0,2,8.2v7.6a4,4,0,0,0,3.69,4c1.89.14,4,.21,6.31.21s4.42-.07,6.31-.21a4,4,0,0,0,3.69-4V8.2A4,4,0,0,0,18.31,4.21Z"
      fill="Grey"
    />
    <path
      d="M10,9.88v4.24a.5.5,0,0,0,.76.43l3.53-2.12a.51.51,0,0,0,0-.86L10.76,9.45A.5.5,0,0,0,10,9.88Z"
      fill="White"
    />
  </svg>
  </Icon>
));

export default YoutubeIcon;
