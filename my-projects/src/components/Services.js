import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Services() {
  return (
    <>
    <div className='container p-5'>
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}  >
          <Item>
            <div className='container'>
         <div className="card" style={{width: "29rem",border:"none"}}>
  <div className="card-body ">
    <h5 className="card-title"><LocalShippingIcon size="large"/></h5>
    <h3 className="card-text">suferfast Feee Dilvery</h3>
    <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
  </div>
</div>
</div>
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>
            <div className='container'>
          <div className="card" style={{width: "29rem",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title"><SecurityIcon/></h5>
    <h3 className="card-text">With supporting text belowt.</h3>
    <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
  </div>
</div>
</div>
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>
            <div className='container'>
          <div className="card" style={{width: "29rem",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title"><CurrencyRupeeIcon/></h5>
    <h3 className="card-text">With supporting text belowt.</h3>
    <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
  </div>
</div>
</div>
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>
            <div className='container'>
          <div className="card" style={{width: "29rem",border:"none"}}>
  <div className="card-body">
    <h5 className="card-title"><AccountBalanceIcon/></h5>
    <h3 className="card-text">With supporting text belowt.</h3>
    <a href="#" className="btn btn-primary mt-3">Go somewhere</a>
  </div>
</div>
</div>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </>
  )
}
export default Services
