import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import Form from ".";

test("addUser works with the exact parameters", async () => {
  const mockFn = vi.fn();

  const user = userEvent.setup();

  render(<Form addUser={mockFn} />);

  // get the required elements
  const name = screen.getByLabelText("Name");
  const mail = screen.getByLabelText("Email");
  const age = screen.getByLabelText("Age");
  const btn = screen.getByRole("button");
  // name input
  await user.click(name);
  await user.keyboard("yunus");
  // mail input
  await user.type(mail, "yunus@gmail.com");
  // age input
  await user.type(age, "18");

  // click the add button
  await user.click(btn);
  // addUser worked with right parameters
  expect(mockFn).toHaveBeenCalledWith({
    name: "yunus",
    mail: "yunus@gmail.com",
    age: "18",
  });
  // reset inputs
  expect(name.value).toBe("");
  expect(mail.value).toBe("");
  expect(age.value).toBe("");
});
