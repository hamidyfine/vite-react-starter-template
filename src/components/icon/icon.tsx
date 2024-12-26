import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';

const fallback = <div style={{ background: '#ddd', borderRadius: 6, height: 24, width: 24 }} />;

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
    if (!name) return null;
    const LucideIcon = lazy(dynamicIconImports[name]);
    if (!LucideIcon) return null;

    return (
        <Suspense fallback={fallback}>
            <LucideIcon {...props} />
        </Suspense>
    );
};
