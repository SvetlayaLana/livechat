export default (fullName) => {
  return fullName.split(' ').reduce((acc, curr) => acc += curr[0], '');
}
