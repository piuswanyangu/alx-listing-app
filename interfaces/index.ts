// card props

export interface CardProps{
    title: string;
    image: string;
    price: number;
}

// button props
export interface ButtonProps {
    labe: string;
    onclick?: ()=> void
}