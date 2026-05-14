import React from "react";

import { useTranslation } from "react-i18next";

import { FeedbackForm } from "@/features/FeedbackForm";

import cls from "./AboutPage.module.scss";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <div className={cls.AboutPage}>
      <h1 className={cls.title}>{t("О сайте")}</h1>

      <p className={cls.description}>{t("Описание проекта")}</p>

      <div className={cls.section}>
        <h2 className={cls.sectionTitle}>{t("Возможности")}</h2>
        <ul className={cls.list}>
          <li>{t("Чтение и просмотр статей")}</li>
          <li>{t("Регистрация и авторизация")}</li>
          <li>{t("Личный профиль пользователя")}</li>
          <li>{t("Тёмная и светлая тема")}</li>
          <li>{t("Поддержка двух языков (RU / EN)")}</li>
        </ul>
      </div>

      <div className={cls.section}>
        <h2 className={cls.sectionTitle}>{t("Стек технологий")}</h2>
        <ul className={cls.list}>
          <li>React 18 + TypeScript</li>
          <li>Redux Toolkit</li>
          <li>Feature-Sliced Design (FSD)</li>
          <li>i18next</li>
          <li>Storybook</li>
          <li>Webpack / Vite</li>
          <li>SCSS Modules</li>
        </ul>
      </div>
      <FeedbackForm />
    </div>
  );
};

export default AboutPage;