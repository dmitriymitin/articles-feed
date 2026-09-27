import { memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

import { Button as ButtonDeprecated } from '../../deprecated/Button';

import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

const _Code = (props: CodeProps) => {
  const { className, text } = props;

  const onCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <pre className={cn(s.Code, className)}>
      <ButtonDeprecated onClick={onCopy} className={s.copyBtn} theme="clear">
        <CopyIcon className={s.copyIcon} />
      </ButtonDeprecated>
      <code>{text}</code>
    </pre>
  );
};

export const Code = memo(_Code);
