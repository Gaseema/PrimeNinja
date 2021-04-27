import React from "react";
import {fetchPreviousPrimeNumber} from '../utils/PrimeNumber'

describe("<PrimeNumber />", () => {
  test("should return highest number lower than the input", async () => {
  });
  test('should return highest number lower than the input',async()=>{
    expect(fetchPreviousPrimeNumber(55)).toBe(53);
  })
});