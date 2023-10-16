import React, { Component } from "react";
import Card from "./Card";
import Chart from "./Chart";
import Table from "./Table";
import "./Tile.css";

class Tile extends Component {
    // createData(username, orderno, orderdate, status, amount, quantity, totalamount) {
    //   return { username, orderno, orderdate, status, amount, quantity, totalamount };
    // }
    constructor(props) {
        super(props);
        this.state = {}
    }

    dataHandler = () => {
        this.props.data.map(amount => {
            <div>{amount.amount}</div>
        })
    }

    render() {
        // const rows = [
        //   createData('akshayk', 5 , 12/5/20, 'reciceved', 550, 120, 12003),
        //   createData('akshayk', 5 , 12/5/20, 'reciceved', 550, 120, 12003),
        //   createData('akshayk', 5 , 12/5/20, 'reciceved', 550, 120, 12003),
        //   createData('akshayk', 5 , 12/5/20, 'reciceved', 550, 120, 12003),
        // ];

        const { data } = this.props;


        return (
            <React.Fragment>

                <div className="row">
                    <Card data={this.props.data}
                        text1={`Top's order-${Math.floor(Math.random() * data[0].amount)}`}
                        text2={`Current Week Order-${5}`}
                    />
                    <Card data={this.props.data}
                        text1={`Today's order amount-${47 + 5}`}
                        text2={`Current Week amount-${4 + 55}`}
                    />
                    <Card data={this.props.data}
                        text1={`MTD order-${4 + 5}`}
                        text2={`Last Month Order-${24 + 5}`}
                    />
                    <Card data={this.props.data}
                        text1={`MTD order amount-${4 + 15}`}
                        text2={`Last month amount-${41 + 5}`}
                    />
                </div>
                <Chart data={this.props.data} />
                <Table data={this.props.data} />
            </React.Fragment>
        );
    }
}
export default Tile;
