interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  city: string;
}

// const test: User = {
//     email:"a@b.com"
// };

type partialUser = Partial<User>;
console.log({} as partialUser);

const updateUser = (userId: string, updatingUser: Partial<User>) => {
  console.log(userId + " id li kullanıcı güncellendi:", updatingUser);
};

updateUser("user1", { name: "Test", city: "Eskişehir" });
interface Product {
  id: number;
  name: string;
  price: number;
  features: string[];
}

type readOnlyProduct = Readonly<Product>;
const product: readOnlyProduct = {
  id: 1,
  name: "Laptop",
  price: 58000,
  features: ["X", "Y"],
};

product.features.push("Z");
console.log(product);

interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  department: string;
}

type employeeNameAndPosition = Pick<Employee, "name" | "position">;

function getEmployeeInfo(emp: Employee): employeeNameAndPosition {
  return {
    name: emp.name,
    position: emp.position,
  };
}

const employee: Employee = {
  id: 1,
  name: "Test name",
  department: "IT",
  position: "Senior",
  salary: 150000,
};

const incoming = getEmployeeInfo(employee);
console.log(incoming);

type employeeWithoutSalary = Omit<Employee, "salary">;

function shareEmployeeData(emp: Employee): employeeWithoutSalary {
  const { salary, ...rest } = emp;
  return rest;
}

const sharedData = shareEmployeeData(employee);
console.log(sharedData);

/*
   Omit: Belirtilen hariç tümünü kullan!
   Partial: tümünü opsiyonel (boş geçilebilir) yap 
   Pick: belirli özellikleri al
   Readonly: immutable object
 */
