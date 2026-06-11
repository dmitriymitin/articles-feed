import { StateSchema } from '@/app/providers/StoreProvider'

import { getProfileData } from './getProfileData';

import { profileTestData } from "@/entities/Profile/testing";


describe('getProfileData.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profileTestData,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(profileTestData);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
