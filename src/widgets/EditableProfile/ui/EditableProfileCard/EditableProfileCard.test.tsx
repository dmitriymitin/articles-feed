import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
  componentRender,
  ComponentRenderOptions,
} from "@/shared/lib/tests/componentRender/componentRender";

import { profileTestData } from "@/entities/Profile/mock";

import { profileReducer } from "../../testing";

import { EditableProfileCard } from "./EditableProfileCard";

import { $api } from "@/shared/api/api";

const profileTest = profileTestData;

const options: ComponentRenderOptions = {
  initialState: {
    profile: {
      readonly: true,
      data: profileTest,
      form: profileTest,
    },
    user: {
      authData: profileTest,
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("Режим рид онли должен переключиться", async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test("При отмене значения должны обнуляться", async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("EditableProfileCardView.first"));
    await userEvent.clear(
      screen.getByTestId("EditableProfileCardView.lastname")
    );

    await userEvent.type(
      screen.getByTestId("EditableProfileCardView.first"),
      "user"
    );
    await userEvent.type(
      screen.getByTestId("EditableProfileCardView.lastname"),
      "user"
    );

    expect(screen.getByTestId("EditableProfileCardView.first")).toHaveValue(
      "user"
    );
    expect(screen.getByTestId("EditableProfileCardView.lastname")).toHaveValue(
      "user"
    );

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );

    expect(screen.getByTestId("EditableProfileCardView.first")).toHaveValue(
      profileTest.first
    );
    expect(screen.getByTestId("EditableProfileCardView.lastname")).toHaveValue(
      profileTest.lastname
    );
  });

  test("Должна появиться ошибка", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("EditableProfileCardView.first"));

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileValidateErrors.Error.Paragraph")
    ).toBeInTheDocument();
  });

  test("Если нет ошибок валидации, то на сервер должен уйти PUT запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");

    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );

    await userEvent.type(
      screen.getByTestId("EditableProfileCardView.first"),
      "user"
    );

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
