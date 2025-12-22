export const fetchProducts = async () => {
  return [
    {
      id: 1,
      name: "SuperClean 2000",
      slug: "superclean-2000",
      description: "Advanced washing machine with AI technology.",
      image: "/assets/images/washing-machines.jpg",
      brand: "Samsung",
      type: "Front Load",
      capacity: "10kg",
      price: 15000,
    },
    {
      id: 2,
      name: "EcoWash Pro",
      slug: "ecowash-pro",
      description: "Energy efficient and water saving.",
      image: "/assets/images/washing-machines.jpg",
      brand: "LG",
      type: "Top Load",
      capacity: "8kg",
      price: 12000,
    },
    {
      id: 3,
      name: "TurboDry 500",
      slug: "turbodry-500",
      description: "Washing machine with integrated dryer.",
      image: "/assets/images/washing-machines.jpg",
      brand: "Whirlpool",
      type: "Front Load",
      capacity: "12kg",
      price: 20000,
    },
  ];
};