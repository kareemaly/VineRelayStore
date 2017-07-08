import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

class EditCategory extends React.Component {

  componentWillMount() {
    this.setState({
      category: this.props.category,
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.category !== nextProps.category) {
      this.setState({
        category: nextProps.category,
      });
    }
  }

  onChange = (data) => {
    this.setState({
      category: {
        ...this.state.category,
        ...data,
      },
    });
  }

  render() {
    const {
      errors,
      submitDisabled,
      onSubmit,
    } = this.props;

    const {
      category,
    } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Name'}
            errorText={errors && errors.name}
            value={category.name}
            onChange={(event) => this.onChange({ name: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            floatingLabelText={'Slug'}
            errorText={errors && errors.slug}
            value={category.slug}
            onChange={(event) => this.onChange({ slug: event.target.value })}
          />
        </InputWrapper>
        <ButtonWrapper>
          <RaisedButton
            label={'Save'}
            disabled={submitDisabled}
            onClick={() => onSubmit(category)}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

EditCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
  submitDisabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default createFragmentContainer(
  EditCategory,
  graphql`
    fragment EditCategory_category on Category {
      id
      name
      slug
    }
  `
);
