import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      id: data.id,
      hasFinished: false,
    };

    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(event) {
    const { onUpdate } = this.props;
    const currentState = this.state;
    this.setState({
      hasFinished: event.target.checked,
    });

    onUpdate({
      ...currentState,
      hasFinished: event.target.checked,
    });
  }

  render() {
    const { data, onRemove, hasFinished } = this.props;
    const { id, title } = data;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckBox} checked={hasFinished} />
        {title}
        <button type="button" onClick={() => onRemove(id)}>Remover</button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onUpdate: PropTypes.func,
  onRemove: PropTypes.func,
  hasFinished: PropTypes.bool,
}.isRequired;
