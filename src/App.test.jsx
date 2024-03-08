import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("app works properly", async () => {
  const user = userEvent.setup();
  render(<App />);

  // call required elements
  const nameInp = screen.getByLabelText("Name");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Age");
  const sendBtn = screen.getByRole("button", {
    name: "Add User",
  });

  // fill the inputs
  await user.type(nameInp, "ayse");
  await user.type(mailInp, "ayse15@gmail.com");
  await user.type(ageInp, "35");

  // click the button
  await user.click(sendBtn);

  // are there exact rows with the given inputs
  screen.getByRole("cell", { name: "ayse" });
  screen.getByRole("cell", { name: "ayse15@gmail.com" });
  screen.getByRole("cell", { name: "35" });
});
