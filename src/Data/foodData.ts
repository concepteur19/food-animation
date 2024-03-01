export type FoodCardProps = {
    price: number,
    foodName: string,
    foodDescription: string
}

export const cardInfos: FoodCardProps[] = [
    {
        price: 32,
        foodName: 'Green Goddess Chicken Salad',
        foodDescription: 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.'
    },
    {
        price: 35,
        foodName: 'Asian Cucumber Salad',
        foodDescription: 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!'
    },
    {
        price: 30,
        foodName: 'Cajunuita Chicken Salad',
        foodDescription: 'a cajun chicken salad with a homemade cajun spice seasoning and the most incredible creamy cajun dressing to put out the fire (so to speak)!.'
    },
];

export const foodColors: string[] = ['bg-[#FF922C]', 'bg-[#54BF29]', 'bg-[#EF1F48]'];

export const foodAngles: string[] = ['rotate-[-2deg]', 'rotate-[-36deg]', 'rotate-[-73deg]']