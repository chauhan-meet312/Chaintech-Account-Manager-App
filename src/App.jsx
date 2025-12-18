import React, { useState, useEffect } from "react";


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone) =>
  /^[0-9]{10}$/.test(phone);

const App = () => {
  const [page, setPage] = useState("login");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUsers(storedUsers);
    if (storedUser) {
      setCurrentUser(storedUser);
      setPage("account");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  /* ---------- LOGIN ---------- */
  const handleLogin = () => {
  if (!form.email || !form.password) {
    return setError("Email and password are required");
  }

  if (!isValidEmail(form.email)) {
    return setError("Please enter a valid email address");
  }

  const user = users.find(
    (u) => u.email === form.email && u.password === form.password
  );

  if (!user) {
    return setError("Invalid email or password");
  }

  setCurrentUser(user);
  setForm(user);
  setPage("account");
};


  /* ---------- REGISTER ---------- */
  const handleRegister = () => {
  if (!form.name || !form.email || !form.password || !form.phone) {
    return setError("All fields are required");
  }

  if (form.name.length < 2) {
    return setError("Name must be at least 2 characters");
  }

  if (!isValidEmail(form.email)) {
    return setError("Invalid email format");
  }

  if (!isValidPhone(form.phone)) {
    return setError("Phone number must be 10 digits");
  }

  if (form.password.length < 6) {
    return setError("Password must be at least 6 characters");
  }

  if (users.some((u) => u.email === form.email)) {
    return setError("Email already exists");
  }

  const newUser = { ...form, id: Date.now() };
  setUsers([...users, newUser]);

  alert("Registration successful! Please login.");
  setPage("login");
  setForm({ name: "", email: "", password: "", phone: "" });
};

  /* ---------- UPDATE ACCOUNT ---------- */
  const handleUpdate = () => {
  if (!form.name || !form.password || !form.phone) {
    return setError("All fields are required");
  }

  if (form.name.length < 2) {
    return setError("Name must be at least 2 characters");
  }

  if (!isValidPhone(form.phone)) {
    return setError("Phone number must be 10 digits");
  }

  if (form.password.length < 6) {
    return setError("Password must be at least 6 characters");
  }

  const updatedUser = { ...currentUser, ...form };

  setUsers(users.map((u) =>
    u.id === currentUser.id ? updatedUser : u
  ));
  setCurrentUser(updatedUser);

  alert("Account updated successfully");
  };
  

  /* ---------- LOGOUT ---------- */

  const logout = () => {
    setCurrentUser(null);
    setPage("login");
    setForm({ name: "", email: "", password: "", phone: "" });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        padding: '40px',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>Account Management App</h2>
        
        {error && (
          <p style={{
            color: 'white',
            backgroundColor: '#f44336',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>{error}</p>
        )}

        {page === "login" && (
          <>
            <input 
              name="email" 
              placeholder="Email" 
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '20px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <button 
              onClick={handleLogin}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '15px'
              }}
            >Login</button>
            <p 
              onClick={() => setPage("register")}
              style={{
                textAlign: 'center',
                color: '#667eea',
                cursor: 'pointer',
                fontWeight: '600',
                margin: 0
              }}
            >Create account</p>
          </>
        )}

        {page === "register" && (
          <>
            <input 
              name="name" 
              placeholder="Name" 
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input 
              name="email" 
              placeholder="Email" 
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input 
              name="phone" 
              placeholder="Phone" 
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '20px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <button 
              onClick={handleRegister}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '15px'
              }}
            >Register</button>
            <p 
              onClick={() => setPage("login")}
              style={{
                textAlign: 'center',
                color: '#667eea',
                cursor: 'pointer',
                fontWeight: '600',
                margin: 0
              }}
            >Back to login</p>
          </>
        )}

        {page === "account" && currentUser && (
          <>
            <p style={{
              backgroundColor: '#f5f5f5',
              padding: '14px',
              borderRadius: '10px',
              marginBottom: '15px',
              fontSize: '15px'
            }}><b>Email:</b> {currentUser.email}</p>
            <input
              name="name"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input
              name="phone"
              value={form.phone}
              placeholder="Phone"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '15px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <input
              name="password"
              value={form.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '20px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '15px',
                boxSizing: 'border-box'
              }}
            />
            <button 
              onClick={handleUpdate}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '10px'
              }}
            >Update</button>
            <button 
              onClick={logout}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: 'white',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;