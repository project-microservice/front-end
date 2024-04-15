import { useState } from 'react';
import styles from './dashboard.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, InboxIcon } from '@mui/material';

function DashBoardLayout({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cx('admin-layout')}>
      <div className={cx('panel')}>
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem style={{ padding: 0 }} key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DashBoardLayout;
