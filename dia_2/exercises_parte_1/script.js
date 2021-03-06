const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  // Exercício 1
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phoneNumber = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;


    return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, Endereço: ${street}, Número: ${number},
    Apartamento: ${apartment}`;
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const coke = order.order.drinks.coke.type;
    let newPerson = 'deliveryPerson';
    const deliveryPerson = 'Luiz Silva';
    order[newPerson] = deliveryPerson;

    let newTotal = 'total';
    const total = 50;
    order[newTotal] = total;

    return `Olá ${order[newPerson]}, o total do seu pedido de muzarella, calabresa e ${coke} é R$ ${order[newTotal]} `;

  
  }
  
  console.log(orderModifier(order));
