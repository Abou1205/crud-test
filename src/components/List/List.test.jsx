import { render, screen, within } from "@testing-library/react";
import List from ".";
import { expect, it } from "vitest";

const testUsers = [
  {
    name: "Abou",
    mail: "ebu1205ed@gmail.com",
    age: 30,
  },
  {
    name: "Derya",
    mail: "dero12@gmail.com",
    age: 22,
  },
  {
    name: "Mehmet",
    mail: "mehodsds2@gmail.com",
    age: 24,
  },
];

// Each user has table row
it("Each user has table row", () => {
  render(<List users={testUsers} />);

  // get the tbody
  const body = screen.getByTestId("body");
  // get all the rows within the tbody
  const rows = within(body).getAllByRole("row");
  // check the rows number with the users array
  expect(rows).toHaveLength(testUsers.length);
});

// Each user has cells for name, age, and email.
it("Each user has cells for name, age, and email.", () => {
  render(<List users={testUsers} />);

  // for each users, there should be table cell
  for (const user of testUsers) {
    // name cell
    screen.getByRole("cell", { name: user.name });

    // mail cell
    screen.getByRole("cell", { name: user.mail });

    // age cell
    screen.getByRole("cell", { name: user.age });
  }
});
