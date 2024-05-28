import { USERS_API_URL, VITE_API_URL } from "../constants";

async function signup(formData) {
    const response = await fetch(USERS_API_URL, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

async function signin(formData) {
    const response = await fetch(`${VITE_API_URL}/login`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

async function signout() {
    const response = await fetch(`${VITE_API_URL}/logout`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

async function destroyUser(user) {
    const response = await fetch(`${USERS_API_URL}/${user.id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
}

export { signup, signin, signout, destroyUser };
