import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

export default NotificationItemShape;
