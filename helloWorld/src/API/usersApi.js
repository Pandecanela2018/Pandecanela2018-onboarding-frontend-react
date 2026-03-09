import apiClient from "./API";

export async function fetchUsers() {
  const response = await apiClient.get("/users");
  return response.data;
}
