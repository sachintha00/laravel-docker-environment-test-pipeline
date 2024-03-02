import React, { Component } from "react";
import { Toolbar, IconButton, Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CameraOutlinedIcon from "@mui/icons-material/GridOn";
import DoorBackIcon from '@mui/icons-material/DoorBack';
import * as MaterialDesign from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap'; 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PanToolIcon from '@mui/icons-material/PanTool';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import SquareIcon from '@mui/icons-material/Square';
import MarginIcon from '@mui/icons-material/Margin';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DataArrayIcon from '@mui/icons-material/DataArray';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  justifyContent: 'center',
}));

class TopBar extends Component {
    render() {
        const { 
            onSizeUpButtonClick, 
            onSizeDownButtonClick, 
            addPanel, 
            addSteelDoor, 
            addGlassDoor, 
            addAdjDoor, 
            addSpHor, 
            addSpVer, 
            addBusBar, 
            addVBusBar, 
            addCoverTB, 
            addCoverFB, 
            addCoverLR, 
            addLCoverFB, 
            addLCoverLR, 
            addcableGland, 
            addMountingPlateFB, 
            addMountingPlateLR, 
            addDinModules, 
            addBBHolder, 
            addHorBBHolder, 
            onSave, 
            onLoad 
        } = this.props;

        return (
            <Toolbar  className='toolbar' style={{ overflow: 'clip' }}>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Tooltip title = 'Files'>
                                <Button  className='btnfiles' {...bindTrigger(popupState)}>
                                    Files
                                </Button>
                            </Tooltip>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={() => { onSave(); popupState.close(); }}>Save</MenuItem>
                                <MenuItem onClick={() => { onLoad(); popupState.close(); }}>Load</MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <Box sx={{ width: '35%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item><Tooltip title="move">
                                <IconButton onClick={() => onSizeUpButtonClick()} style={{ fontSize: '14px',marginBottom:'0px' }}>
                                    <PanToolIcon /></IconButton>
                            </Tooltip></Item>
                        </Grid>
                        {/* Add other Grid items here */}
                    </Grid>
                </Box>
                <div className="center-right-content">
                    {/* Add your labels and buttons here */}
                </div>
            </Toolbar>
        );
    }
}

export default TopBar;
