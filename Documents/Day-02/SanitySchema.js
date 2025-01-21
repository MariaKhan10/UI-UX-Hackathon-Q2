export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Dish Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'image', type: 'image', title: 'Dish Image' },
    ],
  };
  


// export default {
//     name: 'order',
//     type: 'document',
//     fields: [
//       { name: 'orderId', type: 'string', title: 'Order ID' },
//       { name: 'customerName', type: 'string', title: 'Customer Name' },
//       { name: 'address', type: 'string', title: 'Delivery Address' },
//       {
//         name: 'items',
//         type: 'array',
//         of: [{ type: 'reference', to: [{ type: 'product' }] }],
//         title: 'Ordered Items',
//       },
//       { name: 'totalAmount', type: 'number', title: 'Total Amount' },
//       { name: 'status', type: 'string', title: 'Order Status' },
//     ],
//   };
  

// export default {
//     name: 'delivery',
//     type: 'document',
//     fields: [
//       { name: 'orderId', type: 'string', title: 'Order ID' },
//       { name: 'status', type: 'string', title: 'Delivery Status' },
//       { name: 'eta', type: 'string', title: 'Estimated Time of Arrival (ETA)' },
//     ],
//   };
  