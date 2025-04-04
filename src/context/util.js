import apiGold from "../services/api";

export function setUserLocalStorage(user) {
  localStorage.setItem("@user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("@user");

  if (!json) {
    return null;
  }
  const user = JSON.parse(json);

  return user ?? null;
}

export async function loginRequest(email, password) {
  try {
    console.log("API URL:", import.meta.env.VITE_API_URL);
    const req = await apiGold.post("login/LoginUser", {
      email,
      password,
    });
    return req.data;
  } catch (err) {
    return err;
  }
}
