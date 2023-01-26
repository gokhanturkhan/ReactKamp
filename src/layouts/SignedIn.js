import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://docs.kariyer.net/candidate/000/029/984/avatar/2998408920221004082236626.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUgEkOTFQqf55%2Fo44T6D4XX70TQZW%2BfswzxYOeIwCrHIcpOua3rk9Nf%2BX9oH9fyfE47tOm%2BaNNGnV!e!"></Image>
            <Dropdown pointing="top left" text='Gökhan'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign-out" />                   
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
