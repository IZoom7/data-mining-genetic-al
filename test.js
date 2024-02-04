const NUM_CITIES = 4; // จำนวนเมืองในเส้นทางการขาย
const POPULATION_SIZE = 24; // จำนวนบุคคลในประชากร
const MUTATION_RATE = 0; // ความน่าจะเป็นของการกลายพันธุ์
const CROSSOVER_RATE = 0; // ความน่าจะเป็นของการครอสโอเวอร์
const MAX_ITERATIONS = 1000; // จำนวนการทำซ้ำสูงสุด

const DataArray = [
    [52000, 39000, 44000, 48000],
    [78000, 65000, 64000, 52000],
    [59000, 32000, 45000, 38000],
    [56000, 58000, 34000, 49000],
    [61000, 25000, 39000, 44000],
    [67000, 39000, 45000, 57000]
];

console.log("My Array:", DataArray);

// ฟังก์ชันสำหรับสร้างเส้นทางเริ่มต้นแบบสุ่ม
function generateRandomRoute() {
    const route = Array.from({ length: NUM_CITIES }, (_, index) => index);
    for (let i = 0; i < NUM_CITIES; i++) {
        const j = Math.floor(Math.random() * NUM_CITIES);
        [route[i], route[j]] = [route[j], route[i]];
    }
    return route;
}

// ฟังก์ชันสำหรับคำนวณระยะทางรวมของเส้นทาง
function calculateTotalDistance(route) {
    let totalDistance = 0;
    for (let i = 0; i < NUM_CITIES - 1; i++) {
        totalDistance += DataArray[route[i]][route[i + 1]];
    }
    totalDistance += DataArray[route[NUM_CITIES - 1]][route[0]]; // เพิ่มระยะทางจากเมืองสุดท้ายกลับไปยังเมืองแรก
    return totalDistance;
}

// ทดสอบการใช้งานฟังก์ชัน
const randomRoute = generateRandomRoute();
const totalDistance = calculateTotalDistance(randomRoute);
console.log("Random Route:", randomRoute);
console.log("Total Distance:", totalDistance);
