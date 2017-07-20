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
            fullWidth
            floatingLabelText={'Name'}
            errorText={errors && errors.name}
            value={category.name}
            onChange={(event) => this.onChange({ name: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Slug'}
            errorText={errors && errors.slug}
            value={category.slug}
            onChange={(event) => this.onChange({ slug: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Description'}
            errorText={errors && errors.description}
            value={category.description}
            onChange={(event) => this.onChange({ description: event.target.value })}
            multiLine
            rows={3}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Logo Image Url'}
            errorText={errors && errors.logoImage}
            value={category.logoImage}
            onChange={(event) => this.onChange({ logoImage: event.target.value })}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            fullWidth
            floatingLabelText={'Cover Image Url'}
            errorText={errors && errors.coverImage}
            value={category.coverImage}
            onChange={(event) => this.onChange({ coverImage: event.target.value })}
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
    description: PropTypes.string,
    coverImage: PropTypes.string,
    logoImage: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    logoImage: PropTypes.string,
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
      description
      coverImage
      logoImage
    }
  `
);
