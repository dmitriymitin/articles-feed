import { StateSchema } from '@/app/providers/StoreProvider';

import { getProfileId } from './getProfileId';

describe('getProfileId.test', () => {
  test('should work with filled state', () => {
    const profileId = '1'

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          id: profileId
        }
      },
    };
    expect(getProfileId(state as StateSchema)).toEqual(profileId);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileId(state as StateSchema)).toEqual(undefined);
  });
});
