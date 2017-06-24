export function isRelayError(error) {
  return error
    && error.getError
    && error.getError()
    && error.getError().source
    && error.getError().source.errors
    && error.getError().source.errors[0];
}

export function getErrorMessage(error) {
  if(! error) {
    return 'Unknown Error';
  }

  if(isRelayError(error)) {
    return error.getError().source.errors[0].message;
  }

  return error.message;
}

export function getErrorName(error) {
  if(! error) {
    return 'UnknownError';
  }

  if(isRelayError(error)) {
    return error.getError().source.errors[0].name;
  }

  return error.name;
}

export function isValidationError(error) {
  return getErrorName(error) === 'ValidationError';
}

export function isForbiddenError(error) {
  return getErrorName(error) === 'ForbiddenError';
}

export function isUnauthorizedError(error) {
  return getErrorName(error) === 'UnauthorizedError';
}

export function isModelNotFoundError(error) {
  return getErrorName(error) === 'ModelNotFoundError';
}

export function isUnknownError(error) {
  return getErrorName(error) === 'UnknownError';
}

/**
 * This will return an array of validation messages in this format
 *
 * { key: string, value: string }
 */
export function getErrorValidationMessages(error) {
  if(! error) {
    return [];
  }
  if(isRelayError(error)) {
    return error.getError().source.errors[0].validationMessages || [];
  }
  return error.validationMessages || []
}

export function checkErrorValidationKey(error, key) {
  return getErrorValidationMessages(error)
    .some(validationMessage => validationMessage.key === key);
}

export function getErrorValidationMessage(error, key) {
  const validationMessage = getErrorValidationMessages(error)
    .find(validationMessage => validationMessage.key === key);
  return validationMessage ? validationMessage.value : '';
}

export function getErrorValidationObject(error) {
  const validationMessages = getErrorValidationMessages(error);
  const object = {};
  for(let validationMessage of validationMessages) {
    object[ validationMessage.key ] = validationMessage.value;
  }
  return object;
}
