import React, { Component } from "react";
import $ from "jquery";
import "admin-lte/plugins/datatables/jquery.dataTables";
import "admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4";
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.css";

const dataTableSettings = {
  language: {
    sProcessing: "Processando...",
    sLengthMenu: "Mostrar _MENU_ registros",
    sZeroRecords: "Nenhum resultado encontrado",

    sEmptyTable: "Nenhum dado disponível nesta tabela",
    sInfo:
      "Mostrando registros de _START_ até _END_ de um total de _TOTAL_ registros",
    sInfoEmpty: "Mostrando registros de 0 até 0 de um total de 0 registros",
    sInfoFiltered: "(filtrado de um total de _MAX_ registros)",
    sInfoPostFix: "",
    sSearch: "Buscar:",
    sUrl: "",
    sInfoThousands: ",",
    sLoadingRecords: "Carregando...",
    oPaginate: {
      sFirst: "Primero",
      sLast: "Último",
      sNext: "Seguinte",
      sPrevious: "Anterior",
    },
  },
};

export function configDatabase() {
  $.fn.dataTable.ext.errMode = "none";
  $("#dataTable").on("error.dt", function (e, settings, techNote, message) {
    console.log("An error has been reported by DataTables: ", message);
  });
  $(`#dataTable`).DataTable(dataTableSettings);
}

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{this.props.name}</h3>
        </div>
        <div className="card-body">
          <table id="dataTable" className="table table-bordered table-striped">
            <thead>
              <tr>
                {this.props.head.map((element) => (
                  <th>{element}</th>
                ))}
              </tr>
            </thead>
            <tbody>{this.props.rows.length > 0 ? this.props.rows : null}</tbody>
            {!this.props.noUpdate ? (
              <tfoot>
                <tr>
                  {this.props.head.map((element) => (
                    <th>{element}</th>
                  ))}
                </tr>
              </tfoot>
            ) : (
              <div></div>
            )}
          </table>
        </div>
      </div>
    );
  }
}
