const cars = [
  {
    id: 1,
    name: 'VinFast VF e34',
    type: 'Car',
    price: 900000, // Price (VND)
    seats: 5, // Number of seats
    description: 'Xe ô tô điện 5 chỗ với công nghệ tiên tiến, phù hợp di chuyển trong đô thị và đường trường.',
    image: 'https://www.rushlane.com/wp-content/uploads/2021/03/vinfast-electric-car-launch-price-14.jpg',
    brand: 1, // 1 for cars
    year: 2023, // Year of production
    features: ['Tự động lái cấp độ 2', 'Cảnh báo điểm mù', 'Hệ thống điều hòa tự động', 'Hệ thống âm thanh Bose'], // Modern features
    isBest: true // Set this car as the best
  },
  {
    id: 2,
    name: 'VinFast VF 8',
    type: 'SUV',
    price: 1200000, // Price (VND)
    seats: 5, // Number of seats
    description: 'SUV điện thông minh với khả năng tự động lái và nội thất hiện đại.',
    image: 'https://vinfastauto.com/vinfast-vf8.jpg',
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Hệ thống tự lái cấp độ 3', 'Camera 360', 'Ghế massage', 'Cửa sổ trời toàn cảnh'], // Modern features
    isBest: false // Set this car as not the best
  },
  {
    id: 3,
    name: 'VinFast Klara S',
    type: 'Motorbike',
    price: 25000, // Price (VND)
    seats: 2, // Number of seats
    description: 'Xe máy điện thông minh với thiết kế thời trang và khả năng tiết kiệm năng lượng.',
    image: 'https://vinfastauto.com/vinfast-klara-s.jpg',
    brand: 2, // 2 for motorbikes
    year: 2022, // Year of production
    features: ['Kết nối smartphone', 'Chế độ tiết kiệm năng lượng', 'Khóa thông minh', 'Động cơ chống nước IP67'], // Modern features
    isBest: false // Set this car as not the best
  },
  // Add more cars...
];

export default cars;
