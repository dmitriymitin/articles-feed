import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18nForTests from "shared/config/i18n/i18nForTests";
import {MemoryRouter} from "react-router-dom";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export interface ComponentRenderOptions {
  route?: string
  theme?: Theme;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = '/', theme = Theme.DARK } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`}>{component}</div>
        </ThemeProvider>
      </I18nextProvider>
    </MemoryRouter>,
  );
}
