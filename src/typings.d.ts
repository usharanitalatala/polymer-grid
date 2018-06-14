declare module "*.html" {
    const content: string;
    export default content;
}

declare module PolyTest {
    interface Card {
        id: number;
        coverImageUrl: string;
        imageUrl: string;
        isFlipped: boolean;
        isMatched: boolean;
    }

    interface Users {
        id: number;
        name: string;
        email: string;
        regDate: string;
        city: string;
        age: number;
        selected: boolean
    }    
    
    interface Time {
        hour: number;
        minute: number;
        second: number;
    }
}