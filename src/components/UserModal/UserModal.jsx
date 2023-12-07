import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import { logout } from 'redux/reducers/auth/operations';
import { selectUser } from 'redux/reducers/auth/selectors';

const { Box, Typography, Button } = require('@mui/material');
const { createPortal } = require('react-dom');

const portalRoot = document.getElementById('portal-root');

export const UserModal = ({ isOpen }) => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return isOpen
    ? createPortal(
        <Box
          sx={{
            top: '20%',
            left: '12%',
            position: 'fixed',
            zIndex: 'modal',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            User Profile
          </Typography>
          <Typography variant="body2" gutterBottom>
            Name: {user}
          </Typography>
          <Button
            onClick={handleClick}
            variant="contained"
            startIcon={<MeetingRoomIcon />}
          >
            Logout
          </Button>
        </Box>,
        portalRoot
      )
    : null;
};

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
