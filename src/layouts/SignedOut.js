import React from 'react'
import { Button,Menu } from 'semantic-ui-react'

export default function SignedOut(props) {


    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} primary style={{marginRight:"5px"}} >Giriş Yap</Button>
                <Button primary>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}
