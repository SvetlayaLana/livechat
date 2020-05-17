let namespaces = [];

export default function(namespace) {
  let namespacedActions = [];

  if(namespaces.includes(namespace))
    throw new Error('Namespace already exists!');

  namespaces.push(namespace);

  return function(action) {
    const namespacedAction = `${ namespace }_${ action }`;

    if (namespacedActions.includes(namespacedAction)) {
      console.error(`not unique action: ${ namespacedAction }`);
    }

    namespacedActions.push(namespacedAction);

    return namespacedAction;
  }
}
