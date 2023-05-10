import { theme } from '@presentation/styles';
import type { IconProps } from './icon-types';

export const Icon = ({ icon: Icon, ...otherProps }: IconProps) => {
  return <Icon color={theme.colors.purple} weight="regular" {...otherProps} />;
};
