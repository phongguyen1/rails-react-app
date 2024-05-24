import { USERS_API_URL } from "../constants";

async function signup(formData) {
    console.log(formData);
    const response = await fetch(USERS_API_URL, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export { signup };
