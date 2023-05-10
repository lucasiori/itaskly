import { ComponentProps } from 'react';
import type { Icon } from '@presentation/components/icon';

export type IconButtonProps = {
  icon: ComponentProps<typeof Icon>['icon'];
  iconProps: Omit<ComponentProps<typeof Icon>, 'icon'>;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
};
