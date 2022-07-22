import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import List from "./List";
import * as usersActions from "../../actions/usersActions";
import * as publicationsActions from "../../actions/publicationsActions";
import "../../css/publication.css";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Publications extends Component {
  async componentDidMount() {
    const {
      getAllUsers,
      getPublicationByUserKey,
      params: { key },
    } = this.props;
    if (!this.props.usersReducer.users.length) {
      await getAllUsers();
    }
    if (!this.props.usersReducer.users[key].publications) {
      await getPublicationByUserKey(key);
    }
  }
  putPublications = () => {
    const {
      usersReducer,
      publicationsReducer,
      params: { key },
    } = this.props;
    if (
      publicationsReducer.loading ||
      usersReducer.loading ||
      !usersReducer.users.length ||
      !publicationsReducer.publications.length
    ) {
      return <Spinner />;
    } else if (usersReducer.error || publicationsReducer.error) {
      return (
        <Fatal message={usersReducer.error || publicationsReducer.error} />
      );
    } else {
      return (
        <>
          <h1>{`Publications of ${usersReducer.users[key].name}`}</h1>
          <List
            publications={
              usersReducer.users[key].publications ||
              publicationsReducer.publications
            }
          />
        </>
      );
    }
  };

  render() {
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
