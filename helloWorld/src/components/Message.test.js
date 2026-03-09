import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

describe("Message component", () => {
  test('renders "Hello World" initially', () => {
    render(<Message />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test('changes the message to "Button Clicked" after button click', async () => {
    const user = userEvent.setup();
    render(<Message />);

    await user.click(screen.getByRole("button", { name: "Click Me" }));

    expect(screen.getByText("Button Clicked")).toBeInTheDocument();
  });
});
