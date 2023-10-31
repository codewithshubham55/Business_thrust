
const users = [
    { id: 1, username: 'user1', password: 'password1', token: 'token1' },
    { id: 2, username: 'user2', password: 'password2', token: 'token2' },
];

export const authenticate = async (username, password) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log(user,"res")
        return { token: user.token };
    } else {
        throw new Error('Invalid username or password');
    }
};
