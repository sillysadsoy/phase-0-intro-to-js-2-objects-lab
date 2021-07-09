const employee = {
    name: '',
    streetAddress: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee, key) {
    Object.assign = ({}, employee[key]);
    return {}; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}