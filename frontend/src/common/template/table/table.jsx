import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import React from "react";

export default class ListTable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.createSortHandler.bind(this);
  }


  /**
   * 
   */
  createSortHandler(property)
  {
    const direction = (this.props.order === 'asc' ? 'desc' : 'asc');
    this.props.onRequestSort({ property, direction });
  };

  renderHeader()
  {
    const { orderBy, order } = this.props;
    return (
      <TableRow>
        {this.props.headers.map(header =>
        {
          return (
            <TableCell
              numeric={header.type === "numeric"}
              key={header.name}
              sortDirection={orderBy === header.name ? order : false}
            >
              <TableSortLabel
                active={orderBy == header.name}
                direction={order}
                onClick={() => this.createSortHandler(header.name)}
              >
                <b>{header.label}</b>
              </TableSortLabel>
            </TableCell>
          );
        }, this)}
      </TableRow>
    );
  }

  renderBooleanField(field)
  {
    return field ? "Sí" : "No";
  }

  renderBody()
  {
    return this.props.rows.map(row =>
    {
      return (
        <TableRow key={row._id}>
          {this.props.headers.map(header =>
          {
            return (
              <TableCell key={header.name} scope="row">
                {header.type === "boolean"
                  ? this.renderBooleanField(row[header.name])
                  : row[header.name]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  render()
  {
    return (
      <Paper>
        <Table>
          <TableHead>{this.renderHeader()}</TableHead>
          <TableBody>{this.renderBody()}</TableBody>
        </Table>
      </Paper>
    );
  }
}
