import { styled as muiStyled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, Button as MuiButton, TextField as MuiTextField } from '@mui/material';

export const CustomCheckbox = muiStyled(MuiCheckbox)(({ theme }) => ({
    color: '#ccc',
    '&.Mui-checked': {
        color: '#b3b3b3',
    },
}));

export const CustomButton = muiStyled(MuiButton)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#5b5b5b',
    '&:hover': {
      backgroundColor: '#2f2f2f',
    },
}));

export const CustomTextField = muiStyled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#ccc',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff',
  },
}));
