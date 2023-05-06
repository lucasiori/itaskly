import type { Icon } from '@presentation/components/icon';

export type IconButtonProps = {
  onClick?: () => void;
} & React.ComponentProps<typeof Icon>;
