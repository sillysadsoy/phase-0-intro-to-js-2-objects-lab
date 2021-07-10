const employee = {
    name: '',
    streetAddress: ''
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value});
};

function deleteFromEmployeeByKey(employee, key) {
    const newNew = {};
    Object.assign (newNew, employee);
    delete newNew[key];
    return newNew; 
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};