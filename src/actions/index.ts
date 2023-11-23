"use server";

export async function createContact(email: string): Promise<void> {
	const body = {
		email: email,
	};
	await fetch("https://api.brevo.com/v3/contacts", {
		method: "POST",
		//@ts-ignore
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			"api-key": process.env.BREVO_API_KEY,
		},
		body: JSON.stringify(body),
	});
}
