import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HotelInMemDataService implements InMemoryDbService {
    createDb() {
        const hotels = [
            { id: 1, hotelName: 'Mayflower',
              city: 'bangalore',
              roomImg: 'assets/images/Mayflower.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
              hotelAddress: 'Bannerghatta Road, Bengaluru',
              hotelStatus: true,
              hotelRating: 4.5,
              hotelOffer: 50,
              offerAmount: 1200,
              amount: 2400 },
            { id: 2, hotelName: 'Annora',
            city: 'bangalore',
            roomImg: 'assets/images/Annora.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
            hotelAddress: 'Domlur, Bengaluru',
            hotelStatus: true,
            hotelRating: 4.5,
            hotelOffer: 50,
            offerAmount: 1800,
            amount: 3600 },
            { id: 3, hotelName: 'The Galaxy',
            city: 'bangalore',
            roomImg: 'assets/images/The_Galaxy.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
            hotelAddress: 'Bommasandra, Bengaluru',
            hotelStatus: true,
            hotelRating: 3.5,
            hotelOffer: 50,
            offerAmount: 2200,
            amount: 4400  },
            { id: 4, hotelName: 'some xyz',
            city: 'chennai',
            roomImg: 'assets/images/The_Galaxy.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
            hotelAddress: 'Chennai, chennai',
            hotelStatus: true,
            hotelRating: 3.5,
            hotelOffer: 50,
            offerAmount: 2200,
            amount: 4400  },
            { id: 5, hotelName: 'some abcd',
            city: 'chennai',
            roomImg: 'assets/images/The_Galaxy.jpg?w=180&amp;h=135&amp;fit=crop&amp;fm=pjpg',
            hotelAddress: 'Chennai, chennai',
            hotelStatus: true,
            hotelRating: 3.5,
            hotelOffer: 50,
            offerAmount: 2200,
            amount: 4400  },
        ];
        const login = [
            {id: 1, status: 'false'}
        ];
        const booking = [
            {id: 1, checkin: '03/01/2018', checkout: '04/01/2018', city: 'chennai', room: 3 }
        ];
        const movies = [
            {
                id: 1,
                title: 'The 15:17 to Paris',
                thumbnail: 'assets/images/m1.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 2,
                title: 'Peter Rabbit',
                thumbnail: 'assets/images/m2.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 3,
                title: 'Before We Vanish',
                thumbnail: 'assets/images/m3.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            }
        ];
        const tvshows = [
            {
                id: 1,
                title: 'The Grand Tour',
                thumbnail: 'assets/images/tv1.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 2,
                title: 'The Tick',
                thumbnail: 'assets/images/tv2.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 3,
                title: 'Transparent',
                thumbnail: 'assets/images/tv3.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            }
        ];
        const sitcom = [
            {
                id: 1,
                title: 'Speechless / The Middle',
                thumbnail: 'assets/images/s1.jpeg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 2,
                title: 'Vice Principals',
                thumbnail: 'assets/images/s2.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 3,
                title: 'Fresh Off the Boat',
                thumbnail: 'assets/images/s3.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 4,
                title: 'Silicon Valley',
                thumbnail: 'assets/images/s4.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 5,
                title: 'Big Mouth',
                thumbnail: 'assets/images/s5.jpeg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            },
            {
                id: 6,
                title: 'Downward Dog',
                thumbnail: 'assets/images/s6.jpg?w=280&amp;h=150&amp;fit=crop&amp;fm=pjpg',
                youtubeurl: 'www.youtube.com'
            }
        ];
        const db = { hotels, login, booking, movies, tvshows, sitcom,  };
    return db;
    }
}

