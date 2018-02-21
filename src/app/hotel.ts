export class Hotel {
    id: number;
    city: string;
    roomImg: string;
    hotelName: string;
    hotelAddress: string;
    hotelStatus: boolean;
    hotelRating: number;
    hotelOffer: number;
    offerAmount: number;
    amount: number;
}

export class Login {
    id: number;
    status: string;
}

export class Booking {
    id: number;
    checkIn: string;
    checkOut: string;
    city: string;
    room: number;
}

export class Movies {
    id: number;
    title: string;
    thumbnail: string;
    youtubeurl: string;
}

export class TVShows {
    id: number;
    title: string;
    thumbnail: string;
    youtubeurl: string;
}

export class Sitcom {
    id: number;
    title: string;
    thumbnail: string;
    youtubeurl: string;
}

