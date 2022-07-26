import { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";
import * as tasksActions from "../../actions/tasksActions";
import * as usersActions from "../../actions/usersActions";

class Tasks extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.getAllUsers();
    }
    if (!this.props.tasksReducer.tasks.length) {
      await this.props.getAllTasks();
    }
  }

  onChangeChecked = (event) => {
    this.props.onChangeCompleted(event.target.value);
  };

  putContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }
    if (
      this.props.usersReducer.users.length &&
      JSON.stringify(this.props.tasksReducer.tasks).length > 2
    ) {
      return this.props.usersReducer.users.map((user) => {
        return (
          <>
            <h1 key={user.id}>{user.name}</h1>
            {Object.keys(this.props.tasksReducer.tasks[user.id]).map((key) => (
              <>
                <label 
                key={this.props.tasksReducer.tasks[user.id][key].id}>
                  <input
                    type="checkbox"
                    id={this.props.tasksReducer.tasks[user.id][key].id}
                    checked={
                      this.props.tasksReducer.tasks[user.id][key].completed
                    }
                    value={this.props.tasksReducer.tasks[user.id][key].id}
                    onChange={this.onChangeChecked}
                  />
                  {this.props.tasksReducer.tasks[user.id][key].title}
                </label>
                <br />
              </>
            ))}
          </>
        );
      });
    }
  };

  render() {
    console.log(this.props);
    return <div className="Tasks">{this.putContent()}</div>;
  }
}

const mapStateToProps = ({ usersReducer, tasksReducer }) => {
  return {
    usersReducer,
    tasksReducer,
  };
};

const mapDispatchToProps = { ...usersActions, ...tasksActions };

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
