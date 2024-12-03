


function initValidation(formId) {
    const form = document.querySelector(formId);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm(formId)) {
            form.submit();
        }
    });
}


const stateAbbreviations = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

function validateForm(formId) {
    const form = document.getElementById(formId);
    let valid = true;
    
    valid &= checkRequired('first-name', 'First name is required');
    valid &= checkRequired('last-name', 'Last name is required');
    valid &= checkRequired('street-address', 'Address is required');
    valid &= checkRequired('city', 'City is required');
    valid &= checkRequired('state', 'State is required');
    valid &= validateState('state', 'Invalid state abbreviation');
    valid &= checkFormat('zip', 'Invalid ZIP code format', /^[0-9]{5}$/);
    valid &= checkFormat('phone', 'Invalid phone number format', /^\d{10}$/);
    valid &= checkFormat('email', 'Invalid email address format', /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    
    let boxes = document.getElementsByClassName('box');
    let checkboxValid = false;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            checkboxValid = true;            
            break;
        }
    }

    if (!checkboxValid) {
        alert('Please input how you found my page.')
    }

    valid &= checkboxValid;
    
    return valid;
}

function checkRequired(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
        setElementValidity(fieldId, false, message);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function checkFormat(fieldId, message, regex) {
    const field = document.getElementById(fieldId);
    if (!regex.test(field.value)) {
        setElementValidity(fieldId, false, message);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function validateState(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!stateAbbreviations.includes(field.value.toUpperCase())) {
        setElementValidity(fieldId, false, message);
        return false;
    }
    setElementValidity(fieldId, true, '');
    return true;
}

function setElementValidity(id, valid, message) {    
    if (!valid) {                    
        alert(message)        
    }
}
