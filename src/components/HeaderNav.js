import React from 'react';
import {Link} from "react-router-dom"
import { Anchor, Image, Box, Header, Nav, Button, Menu, ResponsiveContext, Text } from 'grommet';


const HeaderNav = () => {
  const navItems = [
    { label: 'Home', to: '/'},
    { label: 'About', to: '/about'},
    { label: 'Battle!', to: '/battle' },
    { label: 'Party', to: '/party'}
  ];
  

  // const [openNotification, setOpenNotification] = React.useState();
  // const handleSidebar = () => setOpenNotification(!openNotification);


  return (
    <Box>
  <Header background="accent-1" pad="large" >
      <Box flex direction="row">
        <Text color="neutral-2" size='xxlarge' weight='bold'>Pokémon Fight!</Text>
            {/* <Image align="center" src="pokeball.png" alt="Pokeball Icon"/>  */}
      </Box>
      <Box direction="row" gap="medium">
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Menu"

              items={navItems.map(item => (
                {label: `${item.label}`, onClick: ()=> {}}
            
              ))}
            >
              <Image src="pokeball.png"></Image>
            </Menu>
          ) : (
            <Nav direction="row">
          {navItems.map(item => (
                <Link className="link" to={item.to} label={item.label} key={item.label}>
                  <Button primary hoverIndicator='true' color='neutral-2' label={item.label}/>
                </Link>
          ))}
    {/* <Button
            onClick={handleSidebar}
            // icon={<Notification color="white" 
            label="Party"
          /> */}
      </Nav>
          )
        }
      </ResponsiveContext.Consumer>
        
    </Box>
    </Header>
  </Box>
)};

export default HeaderNav;