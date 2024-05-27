export const POSTS_API_URL =
    process.env.NODE_ENV === "test" ? "http://mocked-api-url" : import.meta.env.VITE_POSTS_API_URL;

export const SEARCH_API_URL =
    process.env.NODE_ENV === "test" ? "http://mocked-api-url" : import.meta.env.VITE_SEARCH_API_URL;

export const USERS_API_URL = import.meta.env.VITE_USERS_API_URL;

export const SESSIONS_API_URL = import.meta.env.VITE_SESSIONS_API_URL;

export const VITE_API_URL = import.meta.env.VITE_API_URL;
