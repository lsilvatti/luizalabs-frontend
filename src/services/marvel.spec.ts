import { getHash } from "utils";
import marvelService from "./marvel";

describe("marvel service integration", () => {
  it("should have 200 status on getting all characters", async () => {
    const response = await marvelService.get("v1/public/characters", {
      params: getHash(),
    });
    expect(response.data.data.count).toBe(20);
  });

  it("should have 200 status on getting one characters", async () => {
    let id = 1010699;
    const response = await marvelService.get(`v1/public/characters/${id}`, {
      params: getHash(),
    });
    expect(response.data.data.count).toBe(1);
    id = 1010670;
    const newResponse = await marvelService.get(`v1/public/characters/${id}`, {
      params: getHash(),
    });
    expect(newResponse.data.data.count).toBe(1);
  });

  it("should have 200 status on getting one character comics", async () => {
    const response = await marvelService.get(
      "v1/public/characters/1010699/comics",
      {
        params: getHash(),
      }
    );
    expect(response.data.data.count).toBeGreaterThanOrEqual(0);
  });
});
