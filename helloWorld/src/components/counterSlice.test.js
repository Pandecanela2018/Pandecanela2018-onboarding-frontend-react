import { configureStore } from "@reduxjs/toolkit";
import counterReducer, {
  decrement,
  increment,
  loadCounterValue,
} from "./counterSlice";
import { fetchCounterValue } from "../API/counterApi";

jest.mock("../API/counterApi", () => ({
  fetchCounterValue: jest.fn(),
}));

describe("counterSlice reducer", () => {
  test("increments the counter value", () => {
    const initialState = { value: 0, status: "idle" };

    const nextState = counterReducer(initialState, increment());

    expect(nextState).toEqual({ value: 1, status: "idle" });
  });

  test("decrements the counter value", () => {
    const initialState = { value: 1, status: "idle" };

    const nextState = counterReducer(initialState, decrement());

    expect(nextState).toEqual({ value: 0, status: "idle" });
  });
});

describe("counterSlice async actions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("loads the counter value from the API", async () => {
    fetchCounterValue.mockResolvedValue(10);

    const store = configureStore({
      reducer: {
        counter: counterReducer,
      },
    });

    await store.dispatch(loadCounterValue());

    expect(fetchCounterValue).toHaveBeenCalledTimes(1);
    expect(store.getState().counter).toEqual({
      value: 10,
      status: "succeeded",
    });
  });
});
