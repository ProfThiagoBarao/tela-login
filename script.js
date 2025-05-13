class AuthService {
    static async login(email, senha) {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, senha })
        });

        if(!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        return await response.json();
    }
}