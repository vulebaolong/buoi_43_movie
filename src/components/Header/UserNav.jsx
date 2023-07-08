import React from "react";
import { useSelector } from "react-redux";

function UserNav() {
    const { userInfo } = useSelector((state) => state.userSlice);

    const btnClass = `px-5 py-2 rounded border border-gray-500`;

    const renderContent = () => {
        // đã đăng nhập
        if (userInfo) {
            return (
                <>
                    <span className="">{userInfo.hoTen}</span>
                    <button
                        onClick={() => {
                            window.location.href = "/login";
                        }}
                        className={btnClass}
                    >
                        Đăng xuất
                    </button>
                </>
            );
        }

        // chưa đăng nhập
        if (!userInfo) {
            return (
                <>
                    <button className={btnClass}>Đăng nhập</button>
                    <button className={btnClass}>Đăng ký</button>
                </>
            );
        }
    };

    return <div className="flex gap-2">{renderContent()}</div>;
}

export default UserNav;
