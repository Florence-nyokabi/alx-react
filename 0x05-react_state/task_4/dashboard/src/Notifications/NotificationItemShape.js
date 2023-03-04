import PropType from 'prop-types';

export default PropType.shape({
  id: PropType.number.isRequired,
  html: PropType.shape({__html: PropType.string}),
  type: PropType.string.isRequired,
  value: PropType.string
});
