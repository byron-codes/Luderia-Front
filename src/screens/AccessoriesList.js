import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";

export default class CouponList extends Component {
  state = { rows: "" };

  componentDidMount() {
    axios.get("http://localhost:8080/coupon").then(result =>
      this.setState({
        rows: result.data.map(item => (
          <tr key={item.id}>
            <th>{item.id}</th>
          </tr>
        ))
      })
    );
  }

  render() {
    return (
      <Table head={['id']} rows={this.state.rows}></Table>
      // <table id="example1" className="table table-bordered table-striped">
      //   <thead>
      //     <tr>
      //       <th>Rendering engine</th>
      //       <th>Browser</th>
      //       <th>Platform(s)</th>
      //       <th>Engine version</th>
      //       <th>CSS grade</th>
      //     </tr>
      //   </thead>
      //   <tbody>{this.state.rows.length > 0 ? this.state.rows : null}</tbody>
      //   <tfoot>
      //     <tr>
      //       <th>Rendering engine</th>
      //       <th>Browser</th>
      //       <th>Platform(s)</th>
      //       <th>Engine version</th>
      //       <th>CSS grade</th>
      //     </tr>
      //   </tfoot>
      // </table>
    );
  }
}
