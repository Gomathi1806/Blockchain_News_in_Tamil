import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
//import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
//import InstagramIcon from '@material-ui/icons/Instagram'
//import YouTubeIcon from '@material-ui/icons/YouTube'

function Footer () {
  return (
    <BottomNavigation>
      <BottomNavigationAction />
      <BottomNavigationAction
        label='Twitter'
        value='favorites'
        icon={<TwitterIcon style={{ fill: '#1DA1F2' }} />}
      />
      <BottomNavigationAction />
      <BottomNavigationAction />
    </BottomNavigation>
  )
}

export default Footer
