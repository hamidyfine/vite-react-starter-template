import { renderWrapper, screen } from '@/tests';

import { Button } from './button';

describe('Button Component', () => {
    test('renders the component', () => {
        renderWrapper(<Button>Hello</Button>);
        expect(screen.getByText((content) => content.includes('Edit'))).toBeInTheDocument();
    });
    test('renders the component and finds the button by text', () => {
        renderWrapper(<Button>Hello</Button>);
        expect(screen.getByText(/edit/i)).toBeInTheDocument();
    });
    test('renders the component and finds the button by role', () => {
        renderWrapper(<Button>Hello</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('renders the component and finds the button by text', () => {
        renderWrapper(<Button>Hello</Button>);
        expect(screen.getByText((content) => content.includes('Hello'))).toBeInTheDocument();
    });
});
