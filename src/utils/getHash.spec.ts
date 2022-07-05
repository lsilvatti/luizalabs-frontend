import getHash from "./getHash";

describe("getHash", () => {
  it("should return a hash with timestamp", () => {
    const { ts, hash } = getHash();
    expect(typeof ts).toBe("number");
    expect(typeof hash).toBe("string");
  });
});
