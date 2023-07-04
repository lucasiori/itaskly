import { render, screen } from '@testing-library/react';
import { theme } from '@presentation/styles';
import { StatusTag } from '.';

describe('Presentation | Components | StatusTag', () => {
  describe('when rendering', () => {
    describe('and having the pending status', () => {
      it('renders the component with the correct properties', () => {
        render(<StatusTag status="pending" />);

        expect(screen.getByText('PENDING')).toBeInTheDocument();
        expect(screen.getByTestId('status-tag-container')).toHaveStyle({
          'background-color': theme.colors.purple,
        });
      });
    });

    describe('and having the completed status', () => {
      it('renders the component with the correct properties', () => {
        render(<StatusTag status="completed" />);

        expect(screen.getByText('COMPLETED')).toBeInTheDocument();
        expect(screen.getByTestId('status-tag-container')).toHaveStyle({
          'background-color': theme.colors.green,
        });
      });
    });
  });
});
