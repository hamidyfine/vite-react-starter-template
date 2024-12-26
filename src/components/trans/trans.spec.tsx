import { render } from '@testing-library/react';

import { Trans, TransMacro } from './trans';

jest.mock('@lingui/react', () => ({
    Trans: jest.fn(({ children, ...props }) => (
        <span
            data-testid="mock-trans"
            {...props}
        >
            {children}
        </span>
    )),
}));

jest.mock('@lingui/react/macro', () => ({
    Trans: jest.fn(({ children, ...props }) => (
        <span
            data-testid="mock-macro"
            {...props}
        >
            {children}
        </span>
    )),
}));

describe('Trans Component', () => {
    it('should render the Trans component with passed props', () => {
        const { getByTestId } = render(<Trans id="test.message" />);
        const element = getByTestId('mock-trans');

        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute('id', 'test.message');
    });

    it('should render children correctly', () => {
        const { getByTestId, getByText } = render(
            <Trans id="test.message">Hello, world!</Trans>,
        );
        const element = getByTestId('mock-trans');

        expect(element).toBeInTheDocument();
        expect(getByText('Hello, world!')).toBeInTheDocument();
    });
});

describe('TransMacro Component', () => {
    it('should render the TransMacro component with passed props', () => {
        const { getByTestId } = render(<TransMacro id="macro.message">Test</TransMacro>);
        const element = getByTestId('mock-macro');

        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute('id', 'macro.message');
    });

    it('should render children correctly', () => {
        const { getByTestId, getByText } = render(
            <TransMacro id="macro.message">This is a macro!</TransMacro>,
        );
        const element = getByTestId('mock-macro');

        expect(element).toBeInTheDocument();
        expect(getByText('This is a macro!')).toBeInTheDocument();
    });
});
