import React from "react";
import "./ProfileScreen.css";
import Nav from "../NavBar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://loodibee.com/wp-content/uploads/Netflix-avatar-3.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans </h3>
              <button onClick={handleSignOut} className="profileScreen_SignOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
