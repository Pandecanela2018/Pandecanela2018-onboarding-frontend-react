import { render, screen } from "@testing-library/react";
import UserList from "./UserList";
import { fetchUsers } from "../API/usersApi";

jest.mock("../API/usersApi", () => ({
  fetchUsers: jest.fn(),
}));

describe("UserList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows users returned by the API", async () => {
    fetchUsers.mockResolvedValue([
      { id: 1, name: "Ada Lovelace" },
      { id: 2, name: "Grace Hopper" },
    ]);

    render(<UserList />);

    expect(screen.getByText("Loading users...")).toBeInTheDocument();
    expect(await screen.findByText("Ada Lovelace")).toBeInTheDocument();
    expect(screen.getByText("Grace Hopper")).toBeInTheDocument();
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });

  test("shows an error message when the API call fails", async () => {
    fetchUsers.mockRejectedValue(new Error("Network error"));

    render(<UserList />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Could not load users",
    );
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });
});
