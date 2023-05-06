import type { Icon } from '@presentation/components/icon';

export type IconButtonProps = {
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
} & React.ComponentProps<typeof Icon>;
