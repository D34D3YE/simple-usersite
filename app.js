
// User Data and State
const users = JSON.parse(localStorage.getItem('users')) || [{ username: 'admin', password: 'admin', role: 'admin', notes: [] }];
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Application logic (includes functions from the previous implementation)
    