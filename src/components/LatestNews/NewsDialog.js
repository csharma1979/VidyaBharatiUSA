import React from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { X } from 'lucide-react';

const NewsDialog = ({ open, onClose, image }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent className="dialog-content">
        <IconButton className="dialog-close-btn" onClick={onClose}>
          <X size={24} />
        </IconButton>
        <img src={image} alt="Enlarged view" className="dialog-image" />
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;
