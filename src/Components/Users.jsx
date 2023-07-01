import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [cin, setCin] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  // const [deletingUserId, setDeletingUserId] = useState(null);

  // Get users
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3008/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        cin_user: cin,
        name: name,
        telephone: telephone,
        age: age,
        email: email,
        adresse: adresse,
        password: password,
        role: role
      };
  
      if (editingUser) {
        await axios.put(
          `http://localhost:3008/users/${editingUser._id}`,
          userData
        );
        console.log('User updated:', editingUser._id);
        setEditingUser(null);
      } else {
        const response = await axios.post('http://localhost:3008/users', userData);
        console.log('User added:', response.data);
      }
  
      fetchUsers();
      handleReset();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  // Edit user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setCin(user.cin_user);
    setName(user.name);
    setTelephone(user.telephone);
    setAge(user.age);
    setEmail(user.email);
    setAdresse(user.adresse);
    setPassword(user.password);
    setRole(user.role);
  };

  // Delete user
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3008/users/${userId}`);
      console.log('User deleted:', userId);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Reset form fields
  const handleReset = () => {
    setName('');
    setCin('');
    setTelephone('');
    setAge('');
    setEmail('');
    setAdresse('');
    setPassword('');
    setRole('');
    setEditingUser(null); // Reset the editingUser state to null
  };

  return (
    <div className="forms Users">
      
      <div>
        <h2>User Form</h2>
        <form className="crud-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="cin">cin:</label>
            <input
              type="text"
              id="cin"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="text"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="adresse">adresse:</label>
            <input
              type="text"
              id="adresse"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="role">role:</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <button type="submit">
            {editingUser ? 'Update User' : 'Add User'}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div>
        <h2>User Table</h2>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cin</th>
              <th>Name</th>
              <th>Telephone</th>
              <th>Age</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.cin_user}</td>
                <td>{user.name}</td>
                <td>{user.telephone}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.adresse}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="editAction"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteAction"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
