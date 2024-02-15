import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBagView } from '../redux/slices/bagSlice';

export const ViewBtn = ({btnText, type}) => {
  const dispatch = useDispatch(); 
  const { bagView } = useSelector(state => state.bagSlice);

  const bagViewHandler = (name)=>{
    dispatch(setBagView(name.toLowerCase()));
  }

  return (
    <Button
      variant={type}
      style={{
        color: '#000',
        backgroundColor: bagView.toUpperCase() === btnText ? 'rgb(242, 242, 242)' : 'initial',
      }}
      onClick={() => bagViewHandler(btnText)}
    >
      {btnText}
    </Button>
  )
}
