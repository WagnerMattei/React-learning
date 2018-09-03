import LinearProgress from '@material-ui/core/LinearProgress';
import axios from "axios";
import React from "react";
import SearchInput from '../../common/template/search-input/search-input';
import Table from "../../common/template/table/table";
import PageTitle from "../../common/template/texts/page-title";
import If from '../../common/utils/if';
import ProfesorForm from './profesor-form'

const BASE_URL = "http://localhost:3003/api";

export default class Profesores extends React.Component
{
  /*---------------------------------------------------------------------------------
   *                                    CONSTRUCTOR
   *-------------------------------------------------------------------------------*/
  constructor(props)
  {
    super(props);
    this.state = {
      profesores: [],
      order: "asc",
      orderBy: "nombre",
      isLoading: false,
      filter: '',
      dialogOpen: false
    };
  }
  /*---------------------------------------------------------------------------------
   *                                    BEHAVIORS
   *-------------------------------------------------------------------------------*/
  /**
   * 
   */
  componentWillMount()
  {
    this.listUsers();
  }

  /**
   * 
   */
  setLoading(isLoading)
  {
    this.setState({ isLoading: isLoading })
  }

  /**
   *
   */
  listUsers(filter = this.state.filter, direction = this.state.order)
  {
    this.setLoading(true);
    this.setState({ order: direction, filter: filter });
    const order = this.state.order === 'asc' ? '+' : '-';

    axios.get(`${BASE_URL}/users?sort=${order}${this.state.orderBy}&perfil=PROFESOR&nombre__regex=/${filter}/`).then(resp =>
    {
      this.setState({ profesores: resp.data });
      this.setLoading(false);
    });
  }

  /**
   *
   */
  addProfesor()
  {
    this.setState({dialogOpen: true})
  }

  /**
   * 
   */
  onCloseDialog(saved)
  {
    if (saved)
      this.listUsers();
    this.setState({dialogOpen: false});
  }
  /*---------------------------------------------------------------------------------
   *                                    RENDER
   *-------------------------------------------------------------------------------*/
  /**
   * 
   */
  render()
  {
    const headers = [
      {
        name: "nombre",
        label: "Nombre",
        type: "string"
      }
    ];
    return (
      <div>
        <ProfesorForm 
          open={this.state.dialogOpen}
          onClose={() => this.onCloseDialog(false)}
        />
        <PageTitle text={"Profesores"} />
        <SearchInput
          filter={this.state.filter}
          onSearch={filter => this.listUsers(filter, )}
          canAdd
          onAdd={() => this.addProfesor()}
        />
        <If condition={this.state.isLoading}>
          <LinearProgress />
        </If>
        <Table
          onRequestSort={config => this.listUsers('', config.direction)}
          headers={headers}
          order={this.state.order}
          rows={this.state.profesores}
          orderBy={this.state.orderBy}
        />
      </div>
    );
  }
}
