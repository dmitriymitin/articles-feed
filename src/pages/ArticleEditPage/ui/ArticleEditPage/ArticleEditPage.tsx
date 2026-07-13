import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Page } from "@/widgets/Page";

import s from "./ArticleEditPage.module.scss";

// TODO: [feature] - добавить страницу редактирования статей
const ArticleEditPage = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return (
    <Page className={s.ArticleEditPage}>
      {isEdit
        ? t("Редактирование статьи с ID = ") + id
        : t("Создание новой статьи")}
    </Page>
  );
};

export default ArticleEditPage;
