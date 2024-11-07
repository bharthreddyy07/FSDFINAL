import React, { useEffect, useState } from "react";
import "./profile.css"; // Include your CSS file
import { Link } from "react-router-dom";
const ProfilePage = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        setUserName(localStorage.getItem("userName") || "John Doe");
        setUserEmail(localStorage.getItem("userEmail") || "john.doe@example.com");
        setUserPhone(localStorage.getItem("userPhone") || "+91 9347139149");
        setProfilePic(localStorage.getItem("profilePic") || "default-profile.png");
    }, []);

    const handlePicUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePic(event.target.result);
                localStorage.setItem("profilePic", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePicDelete = () => {
        setProfilePic("default-profile.png");
        localStorage.removeItem("profilePic");
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <img className="profile-pic" src={profilePic} alt="Profile" />
            <div className="actions">
                <label className="upload-label" htmlFor="upload-input">Update Profile Picture</label>
                <input
                    type="file"
                    id="upload-input"
                    accept="image/*"
                    onChange={handlePicUpload}
                    style={{ display: "none" }}
                />
                <button onClick={handlePicDelete}>Delete Profile Picture</button>
            </div>
            <div className="user-details">
                <p><strong>Name:</strong> {userName}</p>
                <p><strong>Email:</strong> {userEmail}</p>
                <p><strong>Phone:</strong> {userPhone}</p>
            </div>
            <Link to="/home" className="nav-link">Back to Home</Link>
        </div>
    );
};

export default ProfilePage;
