import React from "react";
import homePng from "../assets/home.png";
import home_Png from "../assets/home_dark.png";
import notificationImage from "../assets/notification-50.png";
import notification_Image from "../assets/notification-.png";
import shopImage from "../assets/shop.png";
import shop_Image from "../assets/shop-.png";
import converImage from "../assets/conversation.png";
import conver_Image from "../assets/conversation-.png";
import walletImage from "../assets/wallet.png";
import wallet_Image from "../assets/wallet-.png";
import subscriptionImage from "../assets/subscription.png";
import subscription_Image from "../assets/subscription-.png";
import profileImage from "../assets/profile.png";
import logoutImage from "../assets/logout.png";

const Sidebar = ({ bgColor, color, toggle }) => {

  return (
    <>
      <div
        className="side_bar_container"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <div className="top_contant">
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={home_Png} />
            ) : (
              <img className="homeImage" src={homePng} />
            )}
            {/* <img src={toggle ? home_Png : homePng} /> */}
            <div className="item">Home</div>
          </div>
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={notification_Image} />
            ) : (
              <img className="homeImage" src={notificationImage} />
            )}
            <div className="item">Notifications</div>
          </div>
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={shop_Image} />
            ) : (
              <img className="homeImage" src={shopImage} />
            )}
            <div className="item">Shop</div>
          </div>
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={conver_Image} />
            ) : (
              <img className="homeImage" src={converImage} />
            )}
            <div className="item">Conversations</div>
          </div>
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={wallet_Image} />
            ) : (
              <img className="homeImage" src={walletImage} />
            )}
            <div className="item">Wallet</div>
          </div>
          <div className="home_image">
            {toggle ? (
              <img className="homeImage" src={subscription_Image} />
            ) : (
              <img className="homeImage" src={subscriptionImage} />
            )}
            <div className="item">Subscription</div>
          </div>
          <div className="home_image">
            <img className="homeImage" src={profileImage} />
            <div className="item">My profile</div>
          </div>
        </div>
        <div className="logout_image">
          <img className="homeImage" src={logoutImage} />
          <div className="bottom_contant">Log Out</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
