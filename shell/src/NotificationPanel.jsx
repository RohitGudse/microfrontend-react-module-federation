import React from "react";

const NofificationPanel = ({ notifications }) => {
    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>

    );
};

export default NotificationPanel;