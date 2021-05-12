import bcrypt from 'bcryptjs';

const Data = {

    userData: [
        {
            Name: 'Sachin Nimshan',
            Email:'sachinnimshan@gmail.com',
            Password: bcrypt.hashSync('1234', 8)
        },
        {
            Name: 'Tin Tin',
            Email:'tintin@gmail.com',
            Password: bcrypt.hashSync('1234', 8)
        }
    ],

    pizzaData : [
        {
            //: 'p1',
        Title: 'Chicken Sausage Meat With Nai Miris',
        Type: 'Classic',
        Category: 'Chicken',
        Image: '/Images/f1.jpg',
        Description: 'A fiery blend of kotchchi chicken sausage meat with nai miris, set upon an all new kotchchi sauce base topped with onion, capsicum and a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p2',
        Title: 'Chicken Bacon',
        Type: 'Classic',
        Category: 'Chicken',
        Image: '/Images/f2.jpg',
        Description: 'Chicken bacon, onions & green chillies with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p3',
        Title: 'Devilled Chicken',
        Type: 'Classic',
        Category: 'Chicken',
        Image: '/Images/f3.jpg',
        Description: 'Devilled chicken in spicy sauce with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p4',
        Title: 'Cheese Lovers',
        Type: 'Classic',
        Category: 'Cheese',
        Image: '/Images/f4.jpg',
        Description: 'Rich tomato sauce with a triple layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p5',
        Title: 'Tandoori Chicken',
        Type: 'Classic',
        Category: 'Chicken',
        Image: '/Images/f5.jpg',
        Description: 'Tandoori chicken & onions with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Sausage Delight',
        Type: 'Classic',
        Category: 'Sausage',
        Image: '/Images/f6.jpg',
        Description: 'Chicken sausages & onions with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Pop Chicken Pizza',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f7.jpg',
        Description: 'Chicken sausages & onions with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Sausage Delight',
        Type: 'Signature',
        Category: 'Sausage',
        Image: '/Images/f8.jpg',
        Description: 'Flavoursome popcorn chicken accompanied with crunchy onion and green chilli with delicious mozzarella and cream cheese, upon a sriracha and tomato sauce base.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Spicy Veggie with Paneer',
        Type: 'Signature',
        Category: 'Veggie',
        Image: '/Images/f9.jpg',
        Description: 'Spicy veggie masala & paneer accompanied with pineapple, topped with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Black Chicken',
        Type: 'Signature',
        Category: 'Veggie',
        Image: '/Images/f10.jpg',
        Description: 'Flavoursome pieces of black chicken and crunchy onion with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'BBQ Chicken',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f11.jpg',
        Description: 'BBQ chicken accompanied by spicy jalapenos, onions and a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Chicken Hawaiian',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f12.jpg',
        Description: 'Chicken ham & pineapple with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Hot Butter Cuttlefish',
        Type: 'Signature',
        Category: 'Fish',
        Image: '/Images/f13.jpg',
        Description: 'Hot butter cuttlefish with chili flakes and butter accompanied by spring onion and capsicum with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Butter Chicken Masala',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f14.jpg',
        Description: 'The ever famous Butter Masala Chicken together with a layer of cream cheese, fresh onions, coriander, ginger and garlic, blanketed with a layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Double Chicken & Cheese Fiesta',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f15.jpg',
        Description: 'A combination of spicy chicken and kotchchi sausage meat with crunchy onions and jalapenos placed on a layer of cream cheese and a layer of mozzarella.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Hot & Spicy Chicken',
        Type: 'Signature',
        Category: 'Chicken',
        Image: '/Images/f16.jpg',
        Description: 'A combination of spicy chicken and kotchchi sausage meat with crunchy onions and jalapenos placed on a layer of cream cheese and a layer of mozzarella.Spicy chunks of chicken, capsicums & onions with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'The Ultimate Chicken Treat',
        Type: 'Favourite',
        Category: 'Chicken',
        Image: '/Images/f17.jpg',
        Description: 'A combination of BBQ chicken, chicken bacon, chicken sausage & an all new roast chicken, accompanied with the freshest green pepper, mushroom, onion and green chilli, blanketed with delicious mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Prawn with Chicken Bacon & Jalapeno',
        Type: 'Favourite',
        Category: 'Chicken',
        Image: '/Images/f18.jpeg',
        Description: 'Succulent prawns with pieces of chicken bacon, accompanied by spring onions, green chillies and jalapenos, layered with mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Veggie Supreme',
        Type: 'Favourite',
        Category: 'Veggie',
        Image: '/Images/f19.jpg',
        Description: 'Mushrooms, tomatoes, onions, black olives and bell peppers with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Beef Pepperoni',
        Type: 'Favourite',
        Category: 'Beef',
        Image: '/Images/f20.jpg',
        Description: 'Australian beef pepperoni in pizza sauce with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Devilled Beef',
        Type: 'Favourite',
        Category: 'Beef',
        Image: '/Images/f21.jpg',
        Description: 'Pieces of devilled beef complemented by fresh capsicums, onions and a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Meat Lovers - Chicken',
        Type: 'Favourite',
        Category: 'Chicken',
        Image: '/Images/f22.jpg',
        Description: 'Topped with a combination of chicken bacon, chicken sausage, BBQ chicken and spicy chicken with a double layer of mozzarella cheese, layered with mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Meat Lovers - Beef',
        Type: 'Favourite',
        Category: 'Beef',
        Image: '/Images/f23.jpg',
        Description: 'Devilled beef, beef pepperoni, kotchchi sausage meat and chicken sausage with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Super Supreme',
        Type: 'Supreme',
        Category: 'Mix',
        Image: '/Images/f24.jpg',
        Description: 'Roast chicken, chicken bacon, chicken sausage, beef pepperoni , pineapple, bell pepper, mushroom, onion and olive with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Hot Garlic Prawns',
        Type: 'Supreme',
        Category: 'Beef',
        Image: '/Images/f25.jpg',
        Description: 'Spicy prawns, hot garlic sauce, onions, peppers and tomatoes with a double layer of mozzarella cheese.',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
        {
            //: 'p6',
        Title: 'Spicy Seafood',
        Type: 'Supreme',
        Category: 'Seafood',
        Image: '/Images/f26.jpg',
        Description: 'A fiery mix of prawns and cuttlefish, accompanied by bell peppers and onions, layered with a double layer of mozzarella cheese',
        Price_Personal: 550,
        Price_Medium: 850,
        Price_Large: 1500
        },
    ]
}


export default Data;