import axios, { AxiosError, AxiosRequestConfig } from "axios";

type ApiErrorResponse = {
	message?: string;
	errors?: Record<string, string[]>;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

export const instance = axios.create({
	baseURL,
	timeout: 15000,
	withCredentials: false,
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use((config) => {
	return config;
});

instance.interceptors.response.use(
	(response) => response,
	(error: AxiosError<ApiErrorResponse>) => {
		const validationMessage = error.response?.data?.errors
			? Object.values(error.response.data.errors).flat().join(" ")
			: undefined;
		const message =
			validationMessage ||
			error.response?.data?.message ||
			error.message ||
			"Something went wrong. Please try again.";

		error.message = message;

		return Promise.reject(error);
	}
);

export const api = {
	get: async <T>(url: string, config?: AxiosRequestConfig) => {
		const response = await instance.get<T>(url, config);
		return response.data;
	},

	post: async <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) => {
		const response = await instance.post<T>(url, body, config);
		return response.data;
	},

	put: async <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) => {
		const response = await instance.put<T>(url, body, config);
		return response.data;
	},

	patch: async <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) => {
		const response = await instance.patch<T>(url, body, config);
		return response.data;
	},

	delete: async <T>(url: string, config?: AxiosRequestConfig) => {
		const response = await instance.delete<T>(url, config);
		return response.data;
	},
};