import { CSSProperties, memo } from 'react';

import { cn } from "../../lib/classNames/classNames";

import s from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={cn(s.Skeleton, className)}
            style={styles}
        />
    );
});
