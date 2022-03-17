import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';

function handleLogout(){
    window.location.reload();
}

function PopDown({username}) {

    return (
        <OverlayTrigger
            trigger="click"
            key='bottom'
            placement='bottom'
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Body>
                        <a className='logoutWord' href='/' onClick={handleLogout}> Sign Out</a>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button className="Logout" variant="secondary">{username}</Button>
        </OverlayTrigger>

    );

}

export default PopDown;