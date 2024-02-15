import * as React from 'react';
import Accordion from '@mui/material/Accordion'; 
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { ViewBtn } from './ViewBtn';
import ButtonGroup from '@mui/material/ButtonGroup';
import { bodyColors, straps, logoColors, stictchesColors } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { setBodyColor, setLogoColor, setStictchesColor, setStrapColor } from '../redux/slices/bagSlice';

export const Accordions = ()=> {
  const dispatch = useDispatch();
  const { bodyColor, strapColor, logoColor, stictchesColor } = useSelector(state=>state.bagSlice);

  const bodyColorHandler = (item)=>{
    dispatch(setBodyColor(item));
  }
  const strapColorHandler = (item)=>{
    dispatch(setStrapColor(item));
  }
  const logoColorHandler = (item)=>{
    dispatch(setLogoColor(item));
  }
  const stictchesColorHandler = (item)=>{
    dispatch(setStictchesColor(item));
  }

  return (
    <>
      <h2 className='heading'>CUSTOMIZE YOUR BAG</h2>
      <div className="view-container">
      <h3>View</h3>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <ViewBtn btnText="CLOSED" type="outlined" />
        <ViewBtn btnText="OPEN" type="outlined" />
      </ButtonGroup>
       
      </div>
      <div className="accordion-wrapper">
      <Accordion style={{ backgroundColor: '#f2f2f2'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ borderBottom: '1px solid #000' }}
          >
            BODY
          </AccordionSummary>
          <AccordionDetails>
          <div className="swatches-wrapper">
              {bodyColors.map((item, index)=>(
                <div 
                  className={`swatch ${bodyColor.name === item.name ? 'swatch-active' : ''}`} 
                  key={index}>
                  <div
                    className="swatch__dot"
                    style={{ backgroundColor: item.color }}
                    onClick={()=>bodyColorHandler(item)}
                  />
                  <div className="swatch__label" style={{ backgroundColor: item.color }}>{item.name}</div>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: '#f2f2f2'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ borderBottom: '1px solid #000' }}
          >
            STRAPS & BAND
          </AccordionSummary>
          <AccordionDetails>
            <div className="swatches-wrapper">
                {straps.map((item, index)=>(
                  <div 
                    className={`swatch ${strapColor.name === item.name ? 'swatch-active' : ''}`} 
                    key={index}>
                    <div
                      className="swatch__dot"
                      style={{ backgroundColor: item.color }}
                      onClick={()=>strapColorHandler(item)}
                    />
                    <div className="swatch__label" style={{ backgroundColor: item.color }}>{item.name}</div>
                  </div>
                ))}
              </div>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: '#f2f2f2'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ borderBottom: '1px solid #000' }}
          >
            LOGO & HARDWARE
          </AccordionSummary>
          <AccordionDetails>
            <div className="swatches-wrapper">
                  {logoColors.map((item, index)=>(
                    <div 
                      className={`swatch ${logoColor.name === item.name ? 'swatch-active' : ''}`} 
                      key={index}>
                      <div
                        className="swatch__dot"
                        style={{ backgroundColor: item.color }}
                        onClick={()=>logoColorHandler(item)}
                      />
                      <div className="swatch__label" style={{ backgroundColor: item.color }}>{item.name}</div>
                    </div>
                  ))}
              </div>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ backgroundColor: '#f2f2f2'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ borderBottom: '1px solid #000' }}
          >
            STITCHES
          </AccordionSummary>
          <AccordionDetails>
          <div className="swatches-wrapper">
                  {stictchesColors.map((item, index)=>(
                    <div 
                      className={`swatch ${stictchesColor.name === item.name ? 'swatch-active' : ''}`} 
                      key={index}>
                      <div
                        className="swatch__dot"
                        style={{ backgroundColor: item.color }}
                        onClick={()=>stictchesColorHandler(item)}
                      />
                      <div className="swatch__label" style={{ backgroundColor: item.color }}>{item.name}</div>
                    </div>
                  ))}
              </div>
          </AccordionDetails>
        </Accordion>
      </div>

    </>
  );
}