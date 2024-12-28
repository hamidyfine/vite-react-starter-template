import { renderWrapper, screen } from '@/tests';

describe('ThemeProvider Component', () => {
    it('should render children', async () => {
        renderWrapper(
            <div>Children of Theme Provider</div>,
        );

        expect(screen.getByText('Children of Theme Provider')).toBeInTheDocument();
    });

    it('forwards props to MantineProvider', () => {
        const props = { theme: { defaultColorScheme: 'dark' } };

        renderWrapper(
            <div>Children of Theme Provider</div>,
            {
                ...props,
            },
        );

        const htmlElement = document.documentElement;

        expect(htmlElement).toHaveAttribute('data-mantine-color-scheme', 'dark');
    });

    it('renders correctly without additional props', () => {
        const { container } = renderWrapper(
            <div>Default Content</div>,
        );

        expect(container).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = renderWrapper(
            <div>Snapshot Content</div>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
