import React from 'react'
import { NavBar } from '../components/navBar/navBar'
import Login from '../../../../../images/login.png'
import Menu from '../../../../../images/menu.png'
import Logo from '../../../../../images/logo.png'
import Cart from '../../../../../images/cart.png'

interface NavBarPresentationalProps {
    isOpen: boolean
    onToggle: () => void
}

const noop = () => {}

export const NavBarPresentational: React.FC<NavBarPresentationalProps> =
    React.memo(({ isOpen, onToggle = noop }) => {
        return (
            <NavBar>
                <div className="md:w-full md:flex md:items-center md:justify-center">
                    <NavBar.Mobile>
                        <NavBar.Logo>
                            <a href="/run-it-ecomerce">
                                <img
                                    src={Logo}
                                    className="logo"
                                    alt="Company logo"
                                />
                            </a>
                        </NavBar.Logo>
                        <NavBar.Toggle onClick={onToggle}>
                            <img
                                src={Menu}
                                alt="Toggle menu"
                                className="logo"
                            />
                        </NavBar.Toggle>
                    </NavBar.Mobile>
                    <NavBar.Collapse isOpen={isOpen}>
                        <input
                            type="text"
                            name="search"
                            placeholder="بحث"
                            className="h-9 w-9/12 rounded outline-none text-center mt-8 md:mt-0"
                        />
                        <NavBar.Link href="/run-it-ecomerce/login">
                            <img
                                src={Login}
                                alt="Login icon for user authentication"
                                className="login-img"
                            />
                            <p>دخول</p>
                        </NavBar.Link>
                        <NavBar.Link href="/run-it-ecomerce/cart">
                            <img
                                src={Cart}
                                alt="Shopping cart icon"
                                className="login-img"
                            />
                            <p>العربية</p>
                        </NavBar.Link>
                    </NavBar.Collapse>
                </div>
            </NavBar>
        )
    })
