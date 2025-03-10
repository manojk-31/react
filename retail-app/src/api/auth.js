export const registerUser = async (data) => {
  try {
    // Retrieve existing users or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (users.some(user => user.email === data.email)) {
      throw new Error('Email already registered!');
    }

    // Add the new user
    users.push({ username: data.username, email: data.email, password: data.password });

    // Store the updated user list in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Registration successful:', data);
    return { success: true, message: 'Registration successful!' };
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
};


