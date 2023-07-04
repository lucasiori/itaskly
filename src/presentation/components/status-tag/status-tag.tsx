import { StatusTagContainer } from './status-tag-styles';
import type { StatusTagProps } from './status-tag-types';

export const StatusTag = ({ status }: StatusTagProps) => {
  return (
    <StatusTagContainer $status={status} data-testid="status-tag-container">
      <span>{status.toUpperCase()}</span>
    </StatusTagContainer>
  );
};
