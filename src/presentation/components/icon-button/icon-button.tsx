import { Icon } from '@presentation/components/icon';
import type { IconButtonProps } from './icon-button-types';

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
};
