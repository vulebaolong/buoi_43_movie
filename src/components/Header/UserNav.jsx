import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { lcStorage } from "../../helpers/localStorage";
import { USER_LOGIN } from "../../contants/contants";

function UserNav() {
    const { userInfo } = useSelector((state) => state.userSlice);
    const navigate = useNavigate();

    const btnClass = `px-5 py-2 rounded border border-gray-500`;

    const handleLogout = () => {
        // khi đăng xuất cần phải reload trang để dữ liệu được làm mới
        lcStorage.remove(USER_LOGIN);
        window.location.href = "/login";
    };

    const renderContent = () => {
        // đã đăng nhập
        if (userInfo) {
            return (
                <>
                    <span className="">{userInfo.hoTen}</span>
                    <button onClick={handleLogout} className={btnClass}>
                        Đăng xuất
                    </button>
                </>
            );
        }

        // chưa đăng nhập
        if (!userInfo) {
            return (
                <>
                    <button onClick={() => navigate("/login")} className={btnClass}>
                        Đăng nhập
                    </button>
                    <button onClick={() => navigate("/register")} className={btnClass}>
                        Đăng ký
                    </button>
                </>
            );
        }
    };

    return <div className="flex gap-2 items-center">{renderContent()}</div>;
}

export default UserNav;
