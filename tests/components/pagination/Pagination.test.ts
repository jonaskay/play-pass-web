import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { test, expect } from "vitest";

import Pagination from "../../../src/components/pagination/Pagination.astro";

test("Pagination component on first page", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Pagination, {
    props: {
      page: {
        currentPage: 1,
        lastPage: 42,
        url: {
          prev: null,
          first: null,
          last: "/42",
          next: "/2",
        },
      },
    },
  });

  expect(result).not.toContain("Previous");
  expect(result).toContain("Next");

  expect(result).not.toContain("First");
  expect(result).toContain("Last");

  expect(result).toContain("1");
  expect(result).toContain("2");
  expect(result).toContain("3");
  expect(result).toContain("4");
  expect(result).toContain("5");
});

test("Pagination component on second page", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Pagination, {
    props: {
      page: {
        currentPage: 2,
        lastPage: 42,
        url: {
          prev: "/1",
          first: "/1",
          last: "/42",
          next: "/3",
        },
      },
    },
  });

  expect(result).toContain("Previous");
  expect(result).toContain("Next");

  expect(result).not.toContain("First");
  expect(result).toContain("Last");

  expect(result).toContain("1");
  expect(result).toContain("2");
  expect(result).toContain("3");
  expect(result).toContain("4");
  expect(result).toContain("5");
});

test("Pagination component on middle page", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Pagination, {
    props: {
      page: {
        currentPage: 23,
        lastPage: 42,
        url: {
          prev: "/22",
          first: "/1",
          last: "/42",
          next: "/24",
        },
      },
    },
  });
  expect(result).toContain("Previous");
  expect(result).toContain("Next");

  expect(result).toContain("First");
  expect(result).toContain("Last");

  expect(result).toContain("21");
  expect(result).toContain("22");
  expect(result).toContain("23");
  expect(result).toContain("24");
  expect(result).toContain("25");
});

test("Pagination component on last page", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Pagination, {
    props: {
      page: {
        currentPage: 42,
        lastPage: 42,
        url: {
          prev: "/41",
          first: "/1",
          last: null,
          next: null,
        },
      },
    },
  });

  expect(result).toContain("Previous");
  expect(result).not.toContain("Next");

  expect(result).toContain("First");
  expect(result).not.toContain("Last");

  expect(result).toContain("38");
  expect(result).toContain("39");
  expect(result).toContain("40");
  expect(result).toContain("41");
  expect(result).toContain("42");
});
