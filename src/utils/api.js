const fetchManufacturers = async () => {
    try {
         const response = await fetch('https://raw.githubusercontent.com/ByteFlipper-58/database/refs/heads/main/FFSensitivities/manufacturers.json');
         if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
         }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch manufacturers:", error);
        throw error;
    }
};

const fetchDevicesByModel = async (model) => {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/ByteFlipper-58/database/refs/heads/main/FFSensitivities/${model}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch devices for model ${model}:`, error);
        throw error;
    }
};

export { fetchManufacturers, fetchDevicesByModel };