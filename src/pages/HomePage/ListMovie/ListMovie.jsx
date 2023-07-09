import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { MA_NHOM } from "../../../contants/contants";
const { Meta } = Card;

function ListMovie() {
    const [movieArr, setMovieArr] = useState([]);
    useEffect(() => {
        axios
            .get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`)
            .then((result) => {
                const { data } = result;
                setMovieArr(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const renderListMovie = () => {
        return movieArr.map((movie, i) => {
            const { hinhAnh, tenPhim, maPhim } = movie;
            return (
                <Card
                    key={i}
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img className="h-60 object-cover" alt="example" src={hinhAnh} />}
                >
                    <Meta title={tenPhim} description="www.instagram.com" />
                    <NavLink
                        className="w-full inline-block text-center rounded-lg py-3 bg-teal-400 mt-3 transition duration-300 hover:scale-105 cursor-pointer text-slate-500 dark:text-slate-100"
                        to={`/detail/${maPhim}`}
                    >
                        Xem Phim
                    </NavLink>
                </Card>
            );
        });
    };

    return <div className="container grid grid-cols-4 gap-5 py-24">{renderListMovie()}</div>;
}

export default ListMovie;
