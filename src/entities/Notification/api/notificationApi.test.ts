import { createTestRtkQueryStore } from "@/shared/lib/tests/createTestRtkQueryStore/createTestTrkQueryStore";

import { notificationTestData } from "../mock";

import { getNotifications } from "./notificationApi";

import "whatwg-fetch";

describe("getNotifications", () => {
  test("success", async () => {
    const notificationsData = [notificationTestData];

    global.fetch = jest.fn().mockResolvedValue(
      new Response(JSON.stringify(notificationsData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
    const store = createTestRtkQueryStore();
    const result = await store.dispatch(getNotifications.initiate(null));

    expect(result.status).toBe("fulfilled");
    expect(result.data).toEqual(notificationsData);
  });

  test("error", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => ({}),
    }) as jest.Mock;

    const store = createTestRtkQueryStore();
    const result = await store.dispatch(getNotifications.initiate(null));

    expect(result.status).toBe("rejected");
    expect(result.error).toBeDefined();
  });
});
