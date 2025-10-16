export async function apiFetch<T>(
		endpoint: string,
		options: RequestInit = {}
): Promise<T> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...(options.headers || {}),
		},
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error(`API error: ${res.status} ${res.statusText}`);
	}

	return res.json();
}
