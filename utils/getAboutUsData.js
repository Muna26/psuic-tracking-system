export const getAboutUsData = () => {
    return {
        history: "Founded in 2010, our shop has been serving the community with top-quality washing machines and expert repair services for over a decade.",
        team: [
            { id: 1, name: "John Doe", role: "Founder & Lead Technician" },
            { id: 2, name: "Jane Smith", role: "Sales Manager" },
            { id: 3, name: "Mike Johnson", role: "Repair Specialist" },
        ],
        values: [
            { id: 1, name: "Quality", icon: "/assets/icons/logo.svg" },
            { id: 2, name: "Integrity", icon: "/assets/icons/logo.svg" },
            { id: 3, name: "Customer Satisfaction", icon: "/assets/icons/logo.svg" },
        ],
        testimonials: [
            {
                id: 1,
                content: "Great service! My washing machine was fixed in no time.",
                name: "Alice Brown",
                company: "Homeowner",
                image: "/assets/images/testimonials.jpg",
            },
            {
                id: 2,
                content: "Highly recommend for buying new machines.",
                name: "Bob White",
                company: "Local Business",
                image: "/assets/images/testimonials.jpg",
            },
        ],
    };
};
