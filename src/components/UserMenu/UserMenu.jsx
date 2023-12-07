import { useState } from 'react';

import { Button } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { UserModal } from 'components/UserModal/UserModal';

export function UserMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleToggleModal}
        variant="contained"
        startIcon={<AccountBoxIcon />}
      >
        Open Profile
      </Button>
      <UserModal isOpen={isModalOpen} onLogout={handleLogout} />
    </div>
  );
}
