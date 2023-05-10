import { Icon } from '@presentation/components/icon';
import type { IconButtonProps } from './icon-button-types';

export const IconButton = ({
  icon,
  iconProps,
  ...otherProps
}: IconButtonProps) => {
  return (
    <button type="button" {...otherProps}>
      <Icon icon={icon} {...iconProps} />
    </button>
  );
};
