import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
