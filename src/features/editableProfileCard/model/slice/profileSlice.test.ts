import { ValidateProfileError } from '../../model/consts/consts';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    id: '123',
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true });
    });

    test('test reset form', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(
            profileReducer(state as ProfileSchema, profileActions.resetForm()),
        ).toEqual({
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test set field', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '' },
        };

        expect(
          profileReducer(state as ProfileSchema, profileActions.setField({ field: 'username', value: 'username' })),
        ).toEqual({
            form: { username: 'username' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
