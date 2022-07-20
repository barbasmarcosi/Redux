import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import List from "./List";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Publications extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.getAllUsers();
    }
      await this.props.getPublicationByUserKey(this.props.params.key)
  }

  render() {
    console.log(this.props);
    return (
      <div className="Publications">
        <h1>{`Publications of ${
          this.props.usersReducer.users[this.props.params.key].name
        }`}</h1>
        <List publications={this.props.publicationsReducer.publications} />
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer,
  };
};

const mapDispatchToProps = { ...usersActions, ...publicationsActions };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withParams(Publications));
