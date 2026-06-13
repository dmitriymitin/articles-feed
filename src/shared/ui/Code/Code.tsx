import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

import { cn } from "../../lib/classNames/classNames";

import { Button } from "../Button";

import s from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(s.Code, className)}>
      <Button onClick={onCopy} className={s.copyBtn} theme="clear">
        <CopyIcon className={s.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
