const foods = [
    {
        title: 'Healthy Meal Plan',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/Ph7HZpK/lunch1.png',
        categories: 'Italian',
        price: 9.99,
        id: 1,
    },
    {
        title: 'Fried Chicken Bento',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/8Yfk9Y4/lunch2.png',
        categories: 'Italian',
        price: 12.99,
        id: 2,
    },
    {
        title: 'Trragon-Rubbed-Salmon',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/5BPBJKH/lunch3.png',
        categories: 'Italian',
        price: 23.99,
        id: 3,
    },
    {
        title: 'Indian Lunch',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/R3rLv58/lunch4.png',
        categories: 'Italian',
        price: 15.99,
        id: 4,
    },
    {
        title: 'Beaf Steak',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/zxQ2mR3/lunch5.png',
        categories: 'Italian',
        price: 7.99,
        id: 5,
    },
    {
        title: 'Honey Soy Salmon',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/Vttm4HL/lunch6.png',
        categories: 'Italian',
        price: 19.99,
        id: 6,
    },
    {
        title: 'Salmon with Grapefruits',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/fqzz97r/dinner1.png',
        categories: 'Chinese',
        price: 9.99,
        id: 7,
    },
    {
        title: 'Lemony Salmon',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/qFcr7vr/dinner2.png',
        categories: 'Chinese',
        price: 12.99,
        id: 8,
    },
    {
        title: 'Pork Tenderiain',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/pLtqXfB/dinner3.png',
        categories: 'Chinese',
        price: 23.99,
        id: 9,
    },
    {
        title: 'Baked Chicken',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/McDVR1C/dinner4.png',
        categories: 'Chinese',
        price: 15.99,
        id: 10,
    },
    {
        title: 'Curlic Butter baked salmon',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/Kynmst1/dinner5.png',
        categories: 'Chinese',
        price: 7.99,
        id: 11,
    },
    {
        title: 'French fries with cheese',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/Kmvyhdn/dinner6.png',
        categories: 'Chinese',
        price: 19.99,
        id: 12,
    },
    {
        title: 'Bagel and cream cheese',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/YWxtdqc/breakfast1.png',
        categories: 'Indian',
        price: 9.99,
        id: 13,
    },
    {
        title: 'Breakfast sandwich',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/t2pmW5S/breakfast2.png',
        categories: 'Indian',
        price: 12.99,
        id: 14,
    },
    {
        title: 'baked chicken',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/0FGxwXy/breakfast3.png',
        categories: 'Indian',
        price: 23.99,
        id: 15,
    },
    {
        title: 'Eggs benedict',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/QC0KJPt/breakfast4.png',
        categories: 'Indian',
        price: 15.99,
        id: 16,
    },
    {
        title: 'Toast fried Egg Butter',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/pwjPPM3/breakfast5.png',
        categories: 'Indian',
        price: 7.99,
        id: 17,
    },
    {
        title: 'Full breakfast egg toast',

        description: 'Apleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something  .',
        img: 'https://i.ibb.co/fSvwzpZ/breakfast6.png',
        categories: 'Indian',
        price: 19.99,
        id: 18,
    },
]

const chooseData = [
    {
        title: 'Fast Delivery',
        description: 'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
        img: 'https://i.ibb.co/1MjJtHP/adult-blur-blurred-background-687824.png',
        id: 21,
        icon: 'https://i.ibb.co/m6TDjxS/g1.png'
    },
    {
        title: 'A Good Auto Responder',
        description: 'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
        img: 'https://i.ibb.co/3sFqDc1/chef-cook-food-33614.png',
        id: 22,
        icon: 'https://i.ibb.co/Lh9MFpK/g3.png',
    },
    {
        title: 'Home Delivery',
        description: 'Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future',
        img: 'https://i.ibb.co/pj7ps21/architecture-building-city-2047397.png',
        icon: 'https://i.ibb.co/C2DG0ZV/g2.png',
        id: 23,
    }
]
export { chooseData };
export default foods;