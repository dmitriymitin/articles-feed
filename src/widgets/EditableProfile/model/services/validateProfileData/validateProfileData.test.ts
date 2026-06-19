import { profileTestData } from "@/entities/Profile/testing";

import { ValidateProfileError } from '../../consts/consts';

import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(profileTestData);

        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...profileTestData,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...profileTestData, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...profileTestData, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
