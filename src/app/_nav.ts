export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Nomenclatives'
  },
  {
    name: 'General',
    url: '/nomenclatives',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Employee',
        url: '/nomenclatives/employee',
        icon: 'icon-people'
      },
      {
        name: 'Bank',
        url: '/nomenclatives/bank',
        icon: 'icon-credit-card'
      },
      {
        name: 'Payment Means',
        url: '/nomenclatives/payment-means',
        icon: 'icon-credit-card'
      }
    ]
  },
  {
    title: true,
    name: 'Stock'
  },
  {
    name: 'Reception',
    url: '/stock/reception',
    icon: 'icon-layers'
  },
];
