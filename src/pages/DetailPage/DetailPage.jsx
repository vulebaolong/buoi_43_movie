import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Progress } from "antd";

function DetailPage() {
    const [movie, setMovie] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`).then((result) => {
            const { data, status } = result;
            setMovie(data.content);
        });
    }, [id]);

    return (
        <div className="container flex items-center justify-center space-x-5">
            <img style={{ width: 300 }} src={movie.hinhAnh} alt="" />
            <h2>{movie.tenPhim}</h2>
            <Progress format={(percent) => `${percent / 10} Days`} type="circle" percent={movie.danhGia * 10} />
        </div>
    );
}

export default DetailPage;
