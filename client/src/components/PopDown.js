import React from 'react';
import { OverlayTrigger, Button, Popover } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function handleLogout(){
    window.location.reload();
}





function PopDown({username}) {

    const history = useHistory();

    function handleProfile(){
    
        history.push("/profile");
    }

    return (
        <OverlayTrigger
            trigger="click"
            key='bottom'
            placement='bottom'
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Body>
                        <button className='logoutWord fixDrop' onClick={handleProfile} > Profile</button>
                        <hr className='lined'/>
                        <a className='logoutWord logOwt' href='/' onClick={handleLogout}> Sign Out</a>
                        <br/>
                        
                    </Popover.Body>
                </Popover>
            }
        >
            <Button className="Logout" variant="secondary">{username}</Button>
        </OverlayTrigger>

    );

}

export default PopDown;