import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Navi() {

    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory();
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/");
    }

    return (
        <div>
            <Menu inverted fixed='top' size='large'>
                <Container>
                    <Menu.Item as={NavLink} to="/"
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        {
                            cartItems.length > 0 && <CartSummary></CartSummary>
                        }
                        {
                            isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>
                        }
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    )
}
