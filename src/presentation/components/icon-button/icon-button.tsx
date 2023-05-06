import { Icon } from '@presentation/components/icon';
import type { IconButtonProps } from './icon-button-types';

export const IconButton = ({ icon, ...otherProps }: IconButtonProps) => {
  return (
    <button type="button" {...otherProps}>
      <Icon icon={icon} />
    </button>
  );
};
