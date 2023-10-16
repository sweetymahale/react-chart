import React from "react";
import TopOrder from "./TopOrder";
import BottomOrder from "./BottomOrder";
import TopUser from "./TopUser";
import BottomUser from "./BottomUser";
import OrderDetail from "./OrderDetail";

function Table() {
    return (
        <div>
            <TopOrder text="Top 5 order" />
            <BottomOrder text="Bottom 5 order" />
            <TopUser text="Top 5 user" />
            <BottomUser text="Bottom 5 user" />
            <OrderDetail text="Detail Order Report" />
        </div>
    );
}
export default Table;
