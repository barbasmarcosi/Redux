import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import PublicationsList from "./PublicationsList";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";
import "../../css/publication.css";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Publications extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.getAllUsers();
    }
    if (
      !this.props.usersReducer.users[this.props.params.key].publications
    ) {
      await this.props.getPublicationByUserKey(this.props.params.key);
    }
  }

  putPublications = () => {
    if (
      this.props.publicationsReducer.loading ||
      this.props.usersReducer.loading ||
      !this.props.usersReducer.users.length ||
      (!this.props.usersReducer.users[this.props.params.key]
        ? !this.props.usersReducer.users[this.props.params.key].publications
            .length
        : 0)
    ) {
      return <Spinner />;
    } else if (
      this.props.usersReducer.error ||
      this.props.publicationsReducer.error
    ) {
      return (
        <Fatal
          message={
            this.props.usersReducer.error ||
            this.props.publicationsReducer.error
          }
        />
      );
    } else {
      return (
        <>
          <h1>{`Publications of ${
            this.props.usersReducer.users[this.props.params.key].name
          }`}</h1>
          <PublicationsList
            publications={
              this.props.usersReducer.users[this.props.params.key].publications || this.props.publicationsReducer.publications
            }
          />
        </>
      );
    }
  };

  render() {
    console.log(this.props);
    return <div className="Publications">{this.putPublications()}</div>;
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
