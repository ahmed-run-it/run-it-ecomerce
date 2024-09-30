import classNames from 'classnames'
import { FC } from 'react'

export const Card: any = ({ children, className }: any) => {
    const combinedClassName = classNames('', className)
    return <div className={combinedClassName}>{children}</div>
}

interface BodyProps {
    children: React.ReactNode
    className?: string
}

const Body: FC<BodyProps> = ({ children, className }) => {
    const combinedClassName = classNames('', className)
    return <div className={combinedClassName}>{children}</div>
}

interface TitleProps {
    children: React.ReactNode
    className?: string
}

const Title: FC<TitleProps> = ({ children, className }) => {
    const combinedClassName = classNames('', className)
    return <div className={combinedClassName}>{children}</div>
}

interface TextProps {
    children: React.ReactNode
    className?: string
}

const Text: FC<TextProps> = ({ children, className }) => {
    const combinedClassName = classNames('', className)
    return <div className={combinedClassName}>{children}</div>
}

interface ImgProps {
    className?: string
    width?: number
    height?: number
    src: string
}

const Img: FC<ImgProps> = ({ className, width, height, src }) => {
    return (
        <img
            src={src}
            alt={src}
            width={width}
            height={height}
            className={className}
        />
    )
}

Card.Title = Title
Card.Body = Body
Card.Text = Text
Card.Img = Img
