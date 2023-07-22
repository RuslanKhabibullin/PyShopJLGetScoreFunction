import { getScore } from "./main"

describe("#getScore", () => {
  const defaultStamp = {
    offset: 0,
    score: {
      home: 0, 
      away: 0
    }
  };

  test("when empty Stamps provided and offset is 0 - returns undefined", () => {
    expect(getScore([], 0)).toBe(undefined);
  });

  test("when empty Stamps provided and offset is more than 0 - returns undefined", () => {
    expect(getScore([], 5)).toBe(undefined);
  });

  test("when offset non exists in Stamps collection - returns undefined", () => {
    expect(getScore([defaultStamp], 1)).toBe(undefined);
  });

  test("when offset exists in Stamps collection - returns Score", () => {
    expect(getScore([defaultStamp], 0)).toEqual({ home: 0, away: 0 });
  });

  test("when Stamps collection contains more than 1 elemend - returns correct Score", () => {
    const anotherScore = { home: 2, away: 3 }
    const anotherStamp = {
      offset: 1,
      score: anotherScore
    }
    expect(getScore([defaultStamp, anotherStamp], 1)).toEqual(anotherScore);
  });
}); 
