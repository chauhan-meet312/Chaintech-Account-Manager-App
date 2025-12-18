# Account Manager App
    
A modern, responsive React-based account management application with user authentication, registration, and profile management features.

## Features

- 🔐 **User Authentication** - Secure login system with email and password validation
- 📝 **User Registration** - Create new accounts with comprehensive form validation
- 👤 **Profile Management** - Update user information (name, phone, password)
- 💾 **Persistent Storage** - User data stored in browser's localStorage
- ✅ **Form Validation** - Real-time validation for email, phone, and password fields
- 🎨 **Modern UI** - Beautiful gradient design with responsive layout

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language
- **LocalStorage API** - Client-side data persistence
- **CSS-in-JS** - Inline styling for component design

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AccountManager1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Usage

### Login
1. Enter your registered email and password
2. Click "Login" to access your account
3. If you don't have an account, click "Create account"

### Register
1. Click "Create account" from the login page
2. Fill in all required fields:
   - Name (minimum 2 characters)
   - Email (valid email format)
   - Phone (10 digits)
   - Password (minimum 6 characters)
3. Click "Register" to create your account
4. You'll be redirected to login page after successful registration

### Update Profile
1. After logging in, you can update:
   - Name
   - Phone number
   - Password
2. Email cannot be changed (used as unique identifier)
3. Click "Update" to save changes

### Logout
- Click "Logout" button to sign out and return to login page

## Validation Rules

| Field | Validation |
|-------|-----------|
| Name | Minimum 2 characters |
| Email | Valid email format (user@domain.com) |
| Phone | Exactly 10 digits |
| Password | Minimum 6 characters |

## Project Structure

```
AccountManager1/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Features in Detail

### Email Validation
- Uses regex pattern to ensure valid email format
- Pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Phone Validation
- Accepts only 10-digit phone numbers
- Pattern: `/^[0-9]{10}$/`

### Data Persistence
- All user data is stored in browser's localStorage
- Current user session is maintained across page refreshes
- Data persists until browser cache is cleared

### Security Notes
⚠️ **Important**: This is a demo application. For production use:
- Implement proper backend authentication
- Hash passwords before storage
- Use secure API endpoints
- Add HTTPS encryption
- Implement token-based authentication (JWT)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue in the repository.

---

**Note**: This application uses client-side storage and is intended for educational and demonstration purposes. For production applications, implement proper backend services and security measures.
