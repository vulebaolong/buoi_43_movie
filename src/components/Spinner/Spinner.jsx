import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

function Spinner() {
    const { isLoading } = useSelector((state) => state.spinnerSlice);
    return isLoading ? (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/95 z-20 flex items-center justify-center">
            <RingLoader color="#36d7b7" size={500} speedMultiplier={3} />
        </div>
    ) : (
        ""
    );
}

export default Spinner;
