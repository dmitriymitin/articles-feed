import { SelectOption } from "@/shared/ui/Select";
import { Trans } from "@/shared/ui/Translate";

import { SortOrder } from "../types/sort";

export const sortOrderOptions: SelectOption<SortOrder>[] = [
  {
    value: 'asc',
    content: <Trans>возрастанию</Trans>,
  },
  {
    value: 'desc',
    content: <Trans>убыванию</Trans>,
  },
]
