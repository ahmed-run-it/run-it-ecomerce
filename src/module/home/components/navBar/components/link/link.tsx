import { Link as RouterLink } from 'react-router-dom'
import { LinkProps } from './link.interface'
import React from 'react'

// Define the Link sub-component for the NavBar
/**
 * `NavBar.Link` component
 *
 * Renders a navigation link with a specific `to` prop for internal routing using `react-router-dom`.
 *
 * @param {LinkProps} to - The URL to navigate to.
 * @param {LinkProps} children - The content to be displayed inside the link.
 */

export const Link: React.FC<LinkProps> = React.memo(({ href, children }) => {
    return (
        <RouterLink
            className="text-white text-xs flex items-center justify-center mr-5 cursor-pointer py-6 md:py-0"
            to={href ?? '/'}
        >
            {children}
        </RouterLink>
    )
})
