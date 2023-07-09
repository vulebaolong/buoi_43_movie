import React from "react";
import style from "./NotFoundPage.module.css";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
    return (
        <section className={style.page_404}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className={style.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className={style.contant_box_404}>
                                <h3 className="h2">Look like you're lost</h3>
                                <p>the page you are looking for not avaible!</p>
                                <NavLink to={"/"} className={style.link_404}>Quay về trang chủ</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
