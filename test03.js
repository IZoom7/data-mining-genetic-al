// 1. กำหนดค่าคงที่
const POPULATION_SIZE = 24;  //จำนวนของโปรแกรมเมอร์ที่สร้างขึ้นในแต่ละรุ่น (generation) ของ genetic algorithm. ในที่นี้, มีโปรแกรมเมอร์ทั้งหมด 24 คนในแต่ละรุ่น.
const MAX_GENERATIONS = 10; //จำนวนของรุ่นทั้งหมดที่ genetic algorithm จะทำงาน. ในที่นี้, มีรุ่นทั้งหมด 10 รุ่น.
const MUTATION_RATE = 0.1; //ความน่าจะเป็นที่โปรแกรมเมอร์แต่ละคนจะถูกเปลี่ยนแปลงค่าของความสามารถ (frameworkSkill และ databaseSkill)

// 2. กำหนดข้อมูลเริ่มต้น
const DataArray = [
  [52000, 39000, 44000, 48000],
  [78000, 65000, 64000, 52000],
  [59000, 32000, 45000, 38000],
  [56000, 58000, 34000, 49000],
  [61000, 25000, 39000, 44000],
  [67000, 39000, 45000, 57000],
];

// 3. สร้างโปรแกรมเมอร์เริ่มต้น
 function createRandomProgrammer() {
  const programmer = {
    frameworkSkill: Math.random(),
    databaseSkill: Math.random(),
  };
  console.log("Created random programmer:", programmer);
  return programmer;
}

// 4. กำหนดฟังก์ชันการประเมิน (Fitness Function)
function calculateFitness(programmer) {
  const salary = programmer.frameworkSkill * DataArray[0][0] +
                 programmer.databaseSkill * DataArray[0][1];
  console.log("Calculated fitness for programmer:", programmer, "Salary:", salary);
  return salary;
}

// 5. ทำการสร้าง initial population
function initializePopulation() {
  const population = [];
  for (let i = 0; i < POPULATION_SIZE; i++) {
    const programmer = createRandomProgrammer();
    population.push(programmer);
  }
  console.log("Initialized population:", population);
  return population;
}

// 6. ทำการทำ Cross-over
function crossover(parent1, parent2) {
  const child = {
    frameworkSkill: (parent1.frameworkSkill + parent2.frameworkSkill) / 2,
    databaseSkill: (parent1.databaseSkill + parent2.databaseSkill) / 2,
  };
  console.log("Crossover between parent1:", parent1, "and parent2:", parent2, "produced child:", child);
  return child;
}

// 7. ทำการ Mutation
function mutate(programmer) {
  if (Math.random() < MUTATION_RATE) {
    programmer.frameworkSkill += Math.random() * 0.1 - 0.05;
    programmer.databaseSkill += Math.random() * 0.1 - 0.05;
    console.log("Mutated programmer:", programmer);
  }
  return programmer;
}

// 8. ทำการเลือก (Selection)
function selectParents(population) {
  const tournamentSize = 5;
  let selectedParents = [];
  for (let i = 0; i < POPULATION_SIZE; i++) {
    const tournament = [];
    for (let j = 0; j < tournamentSize; j++) {
      tournament.push(population[Math.floor(Math.random() * POPULATION_SIZE)]);
    }
    const winner = tournament.reduce((best, current) => {
      return calculateFitness(current) > calculateFitness(best) ? current : best;
    });
    selectedParents.push(winner);
  }
  console.log("Selected parents:", selectedParents);
  return selectedParents;
}

// 9. Main Genetic Algorithm Function
function runGeneticAlgorithm() {
  let population = initializePopulation();

  for (let generation = 0; generation < MAX_GENERATIONS; generation++) {
    console.log(`\n--- Generation ${generation + 1} ---`);
    const parents = selectParents(population);
    const newPopulation = [];

    for (let i = 0; i < POPULATION_SIZE; i += 2) {
      const parent1 = parents[i];
      const parent2 = parents[i + 1];

      const child = crossover(parent1, parent2);
      mutate(child);

      newPopulation.push(parent1, parent2, child);
    }

    population = newPopulation;
  }

  const bestProgrammer = population.reduce((best, current) => {
    return calculateFitness(current) > calculateFitness(best) ? current : best;
  });

  console.log("\n--- Results ---");
  console.log("Best Programmer:", bestProgrammer);
  console.log("Best Salary:", calculateFitness(bestProgrammer));
}

// 10. Run Genetic Algorithm
runGeneticAlgorithm();
