import { SelectOption as SelectDeprecatedOption } from '@/shared/ui/deprecated/Select';
import { Trans } from '@/shared/ui/redesigned/Translate';

import { SortOrder } from '../types/sort';

export const sortOrderOptions: SelectDeprecatedOption<SortOrder>[] = [
  {
    value: 'asc',
    content: <Trans>возрастанию</Trans>,
  },
  {
    value: 'desc',
    content: <Trans>убыванию</Trans>,
  },
];
