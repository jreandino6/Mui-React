import {Stack, Badge} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React, { useContext } from 'react';

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
        <Badge variant="dot" color="primary" invisible={true}>
           <MailIcon></MailIcon>
        </Badge>
        <Badge variant="dot" color="primary" >
           <MailIcon></MailIcon>
        </Badge>
        <Badge badgeContent={0} color="primary"showZero>
           <MailIcon></MailIcon>
        </Badge>

        <Badge badgeContent={5} color="primary">
           <MailIcon></MailIcon>
        </Badge>

        <Badge badgeContent={10} color="secondary" >
           <MailIcon></MailIcon>
        </Badge>
        
        <Badge badgeContent={100} color="secondary">
           <MailIcon></MailIcon>
        </Badge>

        <Badge badgeContent={100} color="secondary" max={999}>
           <MailIcon></MailIcon>
        </Badge>

        
    </Stack>
  )
}