# Authentication-App

## 🚀 Features

- 📱 **Login with mobile number or username**
- 🔢 **OTP-based verification using Twilio**
- ✅ **JWT-based authentication and session persistence**
- 🔒 **Protected dashboard route**
- 🚪 **Logout functionality**
- 💅 **Modern UI** with animated login background, icons, and responsive design

---

## 🛠 Tech Stack

- **Frontend**: React, React Router, Bootstrap, Custom CSS
- **Backend**: Node.js, Express.js
- **Authentication**: OTP via Twilio, JWT for sessions
- **Database**: MongoDB with Mongoose

---

## 🧪 Setup Instructions

## 1. Clone the repo

```bash
git clone https://github.com/rohitpagi33/Authentication-App-
cd LoginApp
````

---

## 2. Configure Environment Variables

## In `/backend/.env`

```env
MONGO_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## 4. Run the App

#### Backend

```bash
cd backend
node server.js
```

#### Frontend

```bash
cd ../frontend
npm start
```

---

## 🌐 Available Routes

### Backend

| Route                     | Method | Description                   |
| ------------------------- | ------ | ----------------------------- |
| `/api/auth/send-otp`      | POST   | Send OTP for registration     |
| `/api/auth/register`      | POST   | Register user after OTP       |
| `/api/auth/login-request` | POST   | Request OTP for login         |
| `/api/auth/login-verify`  | POST   | Verify OTP and login with JWT |

---

## 🔐 JWT Auth Flow

1. User enters username/mobile → gets OTP
2. User enters OTP → receives JWT token
3. Token is stored in `localStorage` and used to authenticate protected routes
4. Dashboard is protected via middleware
5. Logout removes token and redirects to login

---


## 🤝 Contributing

Pull requests are welcome! Feel free to open an issue if you find a bug or want to suggest a feature.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
