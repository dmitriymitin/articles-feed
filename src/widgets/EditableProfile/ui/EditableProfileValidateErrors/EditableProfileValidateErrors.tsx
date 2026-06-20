import { useSelector } from "react-redux";

import { Text } from "@/shared/ui/Text";

import { ValidateProfileError } from "../../model/consts/editableProfileConsts";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";

const validateProfileErrorText = {
  [ValidateProfileError.SERVER_ERROR]: 'Серверная ошибка при сохранении',
  [ValidateProfileError.INCORRECT_COUNTRY]: 'Некорректный регион',
  [ValidateProfileError.NO_DATA]: 'Данные не указаны',
  [ValidateProfileError.INCORRECT_USER_DATA]: 'Имя и фамилия обязательны',
  [ValidateProfileError.INCORRECT_AGE]: 'Некорректный возраст',
};

export const EditableProfileValidateErrors = () => {
  const validateErrors = useSelector(getProfileValidateErrors)

  if (!validateErrors?.length) {
    return <></>
  }

  return (
    <>
      {
        validateErrors.map((err) => (
          <Text
            key={err}
            theme="error"
            text={validateProfileErrorText[err]}
            data-testid="EditableProfileValidateErrors.Error"
          />
        ))
      }
    </>
  );
};
