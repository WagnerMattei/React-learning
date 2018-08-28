import React from "react";
import PageTitle from "../../common/template/texts/page-title";
import Table from "../../common/template/table/table";
import axios from "axios";

const BASE_URL = "http://localhost:3003/api";

export default class Profesores extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profesores: [], order: "asc", orderBy: "nombre" };
  }

  componentWillMount() {
    this.listUsers();
  }

  /**
   *
   */
  listUsers(property = null) {
    if (this.state.order === "asc") 
        this.setState({ order: "desc" });
    else 
        this.setState({ order: "asc" });
    const order = this.state.order === 'asc' ? '+' : '-';
    axios.get(`${BASE_URL}/users?sort=${order}${this.state.orderBy}`).then(resp => {
      this.setState({ profesores: resp.data });
    });
  }

  render() {
    const headers = [
      {
        name: "nombre",
        label: "Nombre",
        type: "string"
      }
    ];
    return (
      <div>
        <PageTitle text={"Profesores"} />
        <Table
          onRequestSort={property => this.listUsers(property)}
          headers={headers}
          order={this.state.order}
          rows={this.state.profesores}
          orderBy={this.state.orderBy}
        />
      </div>
    );
  }
}
