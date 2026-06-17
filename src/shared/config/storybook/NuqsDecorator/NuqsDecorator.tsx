import { NuqsTestingAdapter } from 'nuqs/adapters/testing'

import { Story } from "@storybook/react";

import { GetProps } from "@/shared/types/getProps";

export const NuqsDecorator =
  (props: Partial<GetProps<typeof NuqsTestingAdapter>>) =>
  (StoryComponent: Story) => (
    <NuqsTestingAdapter {...props}>
      <StoryComponent />
    </NuqsTestingAdapter>
);
