import {
  notificationTestData,
  notificationTestData2,
  notificationTestData3,
} from "./testing";

export const notificationsRequestMock = {
  url: `${__API__}/notifications`,
  method: 'GET',
  status: 200,
  response: [
    notificationTestData,
    notificationTestData2,
    notificationTestData3
  ],
}
