import { Icon } from '@presentation/components/icon';
import { IconButtonContainer } from './icon-button-styles';
import type { IconButtonProps } from './icon-button-types';

export const IconButton = ({
  icon,
  iconProps,
  ...otherProps
}: IconButtonProps) => {
  return (
    <IconButtonContainer type="button" {...otherProps}>
      <Icon icon={icon} {...iconProps} />
    </IconButtonContainer>
  );
};
