// card props

export interface CardProps{
    title: string;
    image: string;
    price: number;
}

// button props
export interface ButtonProps {
    label: string;
    onclick?: ()=> void
}
// address interface
export interface Address {
    state: string;
    city: string;
    country: string;
}
// offers interface
export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}
//  property props
export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount?: string;
}