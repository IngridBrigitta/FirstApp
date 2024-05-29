import { cn } from '../../lib/utils';

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
    return (
        <h1 {...props} 
            className={cn(
                "text-3x1 font-bold tracking-tight sm:text-4x1",
                props.className,
            )}
        />
    );
}