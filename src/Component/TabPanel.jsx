import * as React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabCard from './TabCard';
import {PortfolioCardJson} from './MenuList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          className='E_tabs'
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Non-Technical" {...a11yProps(1)} />
          <Tab label="Technical" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className='row'>
          {/* {PortfolioCardJson.filter(PortfolioCardJson => PortfolioCardJson.PortfolioList.includes('all')).map((filter_PortfolioCardJson) => { */}
          {PortfolioCardJson.map((filter_PortfolioCardJson) => {
              return(
                <TabCard 
                    key={filter_PortfolioCardJson.id}
                    portfolioLink = {filter_PortfolioCardJson.PortfolioLink}
                    portfolioImg = {filter_PortfolioCardJson.PortfolioImg}
                    portfolioCategory = {filter_PortfolioCardJson.PortfolioCategory}
                    portfolioTitle = {filter_PortfolioCardJson.PortfolioTitle}
                    portfolioDate = {filter_PortfolioCardJson.PortfolioDate}
                />
              )
          })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='row'>
          {PortfolioCardJson.filter(PortfolioCardJson => PortfolioCardJson.PortfolioId.includes('Nontech')).map((filter_PortfolioCardJson) => {
              return(
                <TabCard 
                    key={filter_PortfolioCardJson.id}
                    portfolioLink = {filter_PortfolioCardJson.PortfolioLink}
                    portfolioImg = {filter_PortfolioCardJson.PortfolioImg}
                    portfolioCategory = {filter_PortfolioCardJson.PortfolioCategory}
                    portfolioTitle = {filter_PortfolioCardJson.PortfolioTitle}
                    portfolioDate = {filter_PortfolioCardJson.PortfolioDate}
                />
              )
          })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='row'>
          {PortfolioCardJson.filter(PortfolioCardJson => PortfolioCardJson.PortfolioId.includes('Tech')).map((filter_PortfolioCardJson) => {
              return(
                <TabCard 
                    key={filter_PortfolioCardJson.id}
                    portfolioLink = {filter_PortfolioCardJson.PortfolioLink}
                    portfolioImg = {filter_PortfolioCardJson.PortfolioImg}
                    portfolioCategory = {filter_PortfolioCardJson.PortfolioCategory}
                    portfolioTitle = {filter_PortfolioCardJson.PortfolioTitle}
                    portfolioDate = {filter_PortfolioCardJson.PortfolioDate}
                />
              )
          })}
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
}
