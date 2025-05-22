
interface LoginCredentials {
    email: string;
    password: string;
}

const loginUserService = async (credentials: LoginCredentials): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email && credentials.password) {
                resolve({ user: { id: '1', email: credentials.email } });
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 1000);
    });
};
