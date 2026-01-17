export async function loginUser(credentials) {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })

    if (!response.ok) {
        throw new Error("Invalid credentials")
    }

    return response.json()
}