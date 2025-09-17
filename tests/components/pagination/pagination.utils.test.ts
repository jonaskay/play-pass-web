import { expect, test } from "vitest";

import { generatePaginationNumbers } from "../../../src/components/pagination/pagination.utils";

test("generatePaginationNumbers when current is 1 and total is less than 5", () => {
  const result = generatePaginationNumbers(1, 4);
  expect(result).toEqual([1, 2, 3, 4]);
});

test("generatePaginationNumbers when current is 1 and total is greater than 5", () => {
  const result = generatePaginationNumbers(1, 42);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test("generatePaginationNumbers when current is 4 and total is less than 5", () => {
  const result = generatePaginationNumbers(4, 4);
  expect(result).toEqual([1, 2, 3, 4]);
});

test("generatePaginationNumbers when current is 4 and total is greater than 5", () => {
  const result = generatePaginationNumbers(4, 42);
  expect(result).toEqual([2, 3, 4, 5, 6]);
});

test("generatePaginationNumbers when current is 42 and total is 42", () => {
  const result = generatePaginationNumbers(42, 42);
  expect(result).toEqual([38, 39, 40, 41, 42]);
});
