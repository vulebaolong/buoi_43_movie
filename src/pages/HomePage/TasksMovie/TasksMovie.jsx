import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { MA_NHOM } from "../../../contants/contants";

function TasksMovie() {
    const [heThongRap, setHeThongRap] = useState([]);

    useEffect(() => {
        axios
            .get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MA_NHOM}`)
            .then((result) => {
                const { data } = result;
                setHeThongRap(data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onChange = (e) => {
        console.log(e);
    };

    const renderHeThongRap = () => {
        return heThongRap.map((heThong,i) => {
            return {
                key: `${i}`,
                label: <img style={{ width: 40 }} src={heThong.logo} alt="" />,
                children: `Content of Tab Pane 1`,
            };
        });
    };

    return (
        <div className="container py-24">
            <Tabs defaultActiveKey="1" tabPosition={"left"} onChange={onChange} items={renderHeThongRap()} />
        </div>
    );
}

export default TasksMovie;
