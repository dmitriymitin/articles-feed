import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Flex } from "@/shared/ui/Flex";
import { Trans } from "@/shared/ui/Translate";

import { getRouteArticles } from '@/shared/const/router';

export const ArticleDetailsPageHeader = () => {
  const navigate = useNavigate();

  return (
    <Flex
      max
      align="center"
      justify="between"
    >
      <Button theme='outline' onClick={() => navigate(getRouteArticles())}>
        <Trans>Назад к списку</Trans>
      </Button>
    </Flex>
  );
}
