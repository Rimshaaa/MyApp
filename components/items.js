export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#FF9801',
    accentRed: '#FF9801',
    accentPink: '#F96165',
  };
  

  export const Categories = [
    {
      name: 'Fruits',
      image: require('../assets/fruit/fruit.jpg'),
      items: [
        {
          name: 'Apple',
          ID: 120928102910,
          rating: '5.0',
          Qty: '10 kg', 
          price: 199,
          isTopOfTheWeek: true,
          image: require('../assets/fruit/apple.jpg'),
          size: 'Large 8"',
          crust: 'Thick Crust',
          delivery: 25,
        
        },
        {
          name: 'Orange',
          ID: 15120129010,
          Qty: '10 kg', 
          rating: '4.5',
          price: 99,
          isTopOfTheWeek: false,
          image: require('../assets/fruit/redOrange.png'),
          size: 'Large 12"',
          crust: 'Thick Crust',
          delivery: 20,
         
        },
        {
          name: 'Banana',
          ID: 250210219910,
          Qty: '10 kg', 
          rating: '4.2',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../assets/fruit/banana.png'),
          size: 'Large 10"',
          crust: 'Thick Crust',
          delivery: 35,
         
        },
      ],
    },
    {
      name: 'Vegetable',
      image: require('../assets/veg/veg.jpg'),
      items: [
        {
          name: 'Onion',
          ID: 252901921020,
          Qty: '10 kg', 
          rating: '5.0',
          price: 199,
          isTopOfTheWeek: true,
          image: require('../assets/veg/onion.png'),
          size: 'Large 14"',
          crust: 'Thin Crust',
          delivery: 30,
       
        },
        {
          name: 'Carrot',
          ID: 300290122180,
          Qty: '10 kg', 
          rating: '4.5',
          price: 299,
          isTopOfTheWeek: false,
          image: require('../assets/veg/carrot.png'),
          size: 'Large 16"',
          crust: 'Thin Cheese',
          delivery: 25,
       
        },
        {
          name: 'Garlic',
          ID: 351290129210,
          Qty: '10 kg', 
          rating: '4.2',
          price: 499,
          isTopOfTheWeek: false,
          image: require('../assets/veg/garlic.png'),
          size: 'Large 15"',
          crust: 'Thin Crust',
          delivery: 45,
       
        },
      ],
    },
    {
      name: 'Meat',
      image: require('../assets/meat/meat.jpg'),
      items: [
        {
          name: 'Chicken',
          ID: 20182301920,
          Qty: '10 kg', 
          rating: '5.0',
          price: 299,
          isTopOfTheWeek: true,
          image: require('../assets/meat/chicken.png'),
          size: 'Medium Glass',
          crust: 'Small Ice',
          delivery: 10,
         
        },
        {
          name: 'Lamb Meat',
          ID: 50172637120,
          Qty: '10 kg', 
          rating: '4.5',
          price: 199,
          isTopOfTheWeek: false,
          image: require('../assets/meat/lambmeat.png'),
          size: 'LArge Glass',
          crust: 'Large Ice',
          delivery: 8,
          
        },
        {
          name: 'Goat Meat',
          ID: 15082191219,
          Qty: '10 kg', 
          rating: '4.2',
          price: 99,
          isTopOfTheWeek: false,
          image: require('../assets/meat/goatmeat.png'),
          size: 'Large Glass',
          crust: 'Small Ice',
          delivery: 5,
         
        },
      ],
    },
  ];

  export const Contracts = [
    {
      name: 'Accepted',
      details: [
     
        {
          ID: 1782187198718,
          name: "Desi Food Restaurant",
          image: require('../assets/images/Res1.png'),
          Contractdesc: 'The Contract states that',
          duration: "1 year"
      },
    
      {
        ID: 11829108201090,
        name: "Pizza Restaurant",
        image: require('../assets/images/Res2.png'),
        Contractdesc: 'The Contract states that',
        duration: "1 year"
      },
    
    {
      ID: 8129018209101291,
      name: "SeaFood Restaurant",
      image: require('../assets/images/Res3.png'),
      Contractdesc: 'The Contract states that',
      duration: "1 month"
    },
    {
      ID: 827831292890811,
      name: "Fish Restaurant",
      image: require('../assets/images/Res4.png'),
      Contractdesc: 'The Contract states that',
      duration: "1 week"
    },  
      ]
    },


    {
      name: 'Rejected',
      details: [
        {
            ID: 1,
            name: "Home Cooked Food",
            image: require('../assets/images/Res6.png'),
            Contractdesc: 'The Contract states that',
            duration: "5 year" 
        },
        {
          ID: 891289128192,
          name: "Freshly Baked",
          image: require('../assets/images/Res5.png'),
          Contractdesc: 'The Contract states that',
          duration: "5 month"
        },
      ]
    }
  ];

  export const Bids = [
    {
      name: 'Pending',
      details: [
      {
        ID: 834983948393041,
        name: "Desi Food Restaurant",
        image: require('../assets/images/Res1.png'),
      },
      
      {
        ID: 1817291829912,
        name: "Pizza Restaurant",
        image: require('../assets/images/Res2.png'),
      },
      
      {
        ID: 182392839283,
        name: "SeaFood Restaurant",
        image: require('../assets/images/Res3.png'),
      },
      
     
      ]
    },


    {
      name: 'In Progress ',
      details: [
        {
          ID: 13232392039,
          name: "Freshly Baked",
          image: require('../assets/images/Res5.png'),
        },
        {
          ID: 183798213912,
          name: "Home Cooked Food",
          image: require('../assets/images/Res6.png'),
        },
      ]
    },

    {
      name: 'Compeleted',
      details: [
        {
          ID: 1287319283912,
          name: "Fish Restaurant",
          image: require('../assets/images/Res4.png'),
        },
      ]
    }
  ];