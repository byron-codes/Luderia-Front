import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
import { Row, Button, Card } from "react-bootstrap";
import Grid from "../components/Layout/Grid";
import Select from "react-select";
import LabelAndInput from "../components/Field/LabelAndInput";
import Table from "../components/Table/Table";
import swal from "sweetalert";
import axios from "axios";
import { baseURL } from "../endpoints";

const reason = [
  { value: "DAMAGED", label: "Produto danificado" },
  { value: "INCORRECT", label: "Produto incorreto" },
  { value: "INCOMPLETE", label: "Produto incompleto" },
  { value: "WAIVER", label: "Desistência" },
];

const initialState = {
  freight: 0,
  total: 0,
  items: [],
  creditCard: {},
  address: {},
  coupon: {},
  itemsSelect: [],
  maxItem: 1,
  toTable: {
    quantity: 1,
    item: "",
    itemId: 0,
    reason: "",
    reasonLabel: "",
    description: "",
  },
  rows: [],
  selectedItemValue: "",
  selectedReasonValue: "",
  itemsToSave: [],
};

export default class SaleChange extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.setListItems = this.setListItems.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);
    this.setAttr = this.setAttr.bind(this);
    this.addRow = this.addRow.bind(this);
    this.indexById = this.indexById.bind(this);
    this.save = this.save.bind(this);
    this.getItems();
  }

  getItems() {
    axios
      .get(`${baseURL}/sale/${this.props.match.params.id}`)
      .then((result) => {
        this.setState({
          ...this.state,
          ...result.data,
        });
        this.setListItems();
      });
  }

  setListItems() {
    let itemsSelect = [];
    this.state.items.map((itemSale) => {
      itemsSelect.push({
        value: itemSale.product.id,
        label: itemSale.product.name,
        quantity: itemSale.quantity,
      });
    });
    this.setState({ ...this.state, itemsSelect });
  }

  setSelectedProduct(item) {
    const toTable = this.state.toTable;
    toTable.item = item.label;
    toTable.itemId = item.value;
    toTable.quantity = 1;
    this.setState({
      ...this.state,
      selectedItemValue: item,
      toTable,
      maxItem: item.quantity,
    });
  }

  setSelectedReason(item) {
    let toTable = this.state.toTable;
    toTable.reason = item.value;
    toTable.reasonLabel = item.label;
    this.setState({ toTable, selectedReasonValue: item });
  }

  setAttr(target, value) {
    const temp = this.state;
    temp.toTable[target] = value;
    this.setState({
      ...temp,
    });
  }

  addRow() {
    if (
      this.state.toTable.item == "" ||
      this.state.toTable.reasonLabel == "" ||
      this.state.toTable.description == ""
    ) {
      swal("Ops...", "Todos os campos são obrigátorios", "error");
      return;
    }

    let itemsToSave = this.state.itemsToSave;
    itemsToSave.push({
      changeReason: this.state.toTable.reason,
      description: this.state.toTable.description,
      id: this.state.toTable.itemId,
      quantity: this.state.toTable.quantity,
    });

    let rows = this.state.rows;
    rows.push(
      <tr>
        <td>{this.state.toTable.item}</td>
        <td>{this.state.toTable.quantity} Itens</td>
        <td>{this.state.toTable.reasonLabel}</td>
        <td>{this.state.toTable.description}</td>
      </tr>
    );
    let itemsSelect = this.state.itemsSelect;

    itemsSelect[this.indexById(this.state.toTable.itemId)].quantity =
      itemsSelect[this.indexById(this.state.toTable.itemId)].quantity -
      this.state.toTable.quantity;

    if (itemsSelect[this.indexById(this.state.toTable.itemId)].quantity === 0) {
      itemsSelect.splice(this.indexById(this.state.toTable.itemId), 1);
    }

    this.setState({
      ...this.state,
      rows,
      itemsSelect,
      toTable: {
        quantity: 1,
        item: "",
        itemId: 0,
        reason: "",
        reasonLabel: "",
        description: "",
      },
      selectedItemValue: "",
      selectedReasonValue: "",
      itemsToSave,
    });
  }

  indexById(id) {
    for (var i = 0; i < this.state.itemsSelect.length; i++) {
      if (this.state.itemsSelect[i].value === id) {
        return i;
      }
    }
    return undefined;
  }

  save() {
    if (this.state.rows.length > 0) {
      axios
        .post(`${baseURL}/sale-change`, {
          sale: { id: this.props.match.params.id },
          items: this.state.itemsToSave,
        })
        .then((result) => {
          swal(
            "Muito obrigado",
            "Sua solicitação de troca será análisada em até 5 dias utéis",
            "success"
          ).then((value) => {
            window.location = "/sales";
          });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Container class="mt-100 mb-60">
          <Card>
            <Row className="ml-3 mr-3 mt-3">
              <Grid cols="3 3 3 3">
                <div data-cy="item-change">
                  <label>Produto</label>
                  <Select
                    options={this.state.itemsSelect}
                    isSearchable
                    placeholder="Selecione..."
                    onChange={(e) => this.setSelectedProduct(e)}
                    value={this.state.selectedItemValue}
                    noOptionsMessage={() => "Sem itens"}
                  />
                </div>
              </Grid>
              <Grid cols="2 2 2 2">
                <div>
                  <LabelAndInput
                    label="Quantidade"
                    type="number"
                    max={this.state.maxItem}
                    min="1"
                    maxLength={this.state.maxItem}
                    onChange={this.setAttr}
                    value={this.state.toTable.quantity}
                    name="quantity"
                    dataCy="quantity"
                  ></LabelAndInput>
                </div>
              </Grid>
              <Grid cols="3 3 3 3">
                <div data-cy="reason">
                  <label>Motivo</label>
                  <Select
                    options={reason}
                    isSearchable
                    placeholder="Selecione..."
                    onChange={(e) => this.setSelectedReason(e)}
                    value={this.state.selectedReasonValue}
                  />
                </div>
              </Grid>
              <Grid cols="3 3 3 3">
                <div>
                  <LabelAndInput
                    label="Descrição do problema"
                    onChange={this.setAttr}
                    value={this.state.toTable.description}
                    name="description"
                    dataCy="description"
                  ></LabelAndInput>
                </div>
              </Grid>
              <Grid
                cols="1 1 1 1"
                class="d-flex justify-content-center btn-change-sale"
              >
                <Button variant="outline-success" onClick={() => this.addRow()} data-cy="btn-add">
                  <i className="fa fa-plus"></i>
                </Button>
              </Grid>
            </Row>
            <div className="dropdown-divider"></div>
            <Row>
              <Grid cols="12 12 12 12" class="pl-3 pr-3">
                {/* <Table
                  head={["Nome", "Quantidade", "Motivo", "Descrição"]}
                  rows={[
                    <tr className="table-light mouse-click">
                      <td scope="row" className="font-weight-bold">
                        Zombicide
                      </td>
                      <td>3 Itens</td>
                      <td>Produto incompleto</td>
                      <td>O produto veio faltando miniaturas</td>
                    </tr>
                  ]}
                ></Table> */}
                <Table
                  id="tableChange"
                  name="Lista de compras"
                  head={[
                    "Nome do produto",
                    "Quantidade de itens",
                    "Motivo",
                    "Descrição",
                  ]}
                  rows={this.state.rows}
                  noUpdate
                ></Table>
              </Grid>
            </Row>
            <Card.Footer className="d-flex justify-content-end">
              <Button variant="outline-warning" onClick={() => this.save()} data-cy="btn-save-change">
                Solicitar troca
              </Button>
            </Card.Footer>
          </Card>
        </Container>
        <Footer fix></Footer>
      </React.Fragment>
    );
  }
}
