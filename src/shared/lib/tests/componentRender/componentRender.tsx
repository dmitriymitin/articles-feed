import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";

import i18nForTests from "@/shared/config/i18n/i18nForTests";

export interface ComponentRenderOptions {
  route?: string;
  theme?: Theme;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {}
) {
  const { route = "/", theme = Theme.DARK, initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{component}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
