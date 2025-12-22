export const getRepairServicesData = () => {
    return {
        services: [
            { id: 1, name: "Diagnosis", description: "We identify the problem with your machine." },
            { id: 2, name: "Part Replacement", description: "We replace broken or worn-out parts." },
            { id: 3, name: "Maintenance", description: "Standard maintenance to keep your machine running smoothly." },
        ],
        commonIssues: [
            { id: 1, description: "Machine not draining" },
            { id: 2, description: "Loud noises during spin cycle" },
            { id: 3, description: "Water leaking" },
        ],
        pricing: "Our diagnosis fee is $50, which is waived if you proceed with the repair. Part costs vary by model.",
        warranty: "We offer a 90-day warranty on all repairs and parts.",
    };
};
