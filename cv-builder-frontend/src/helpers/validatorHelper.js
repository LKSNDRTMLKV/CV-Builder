function validate(inputJSON) {
    let messages = [];

    inputJSON.map((input) => {
        let invalidField = false;

        if (input.type === "required") {
            if (input.value === "" || input.value === null) {
                invalidField = true;
            }
        }
        else if (input.type === "email") {
            if (input.value === "" || input.value === null) {
                invalidField = true;
            }
            else if (input.value.indexOf("@") === -1) {
                invalidField = true;
            }
            else if (input.value.indexOf(".") === -1) {
                invalidField = true;
            }
        }
        else if (input.type === "password") {
            if (input.value === "" || input.value === null) {
                invalidField = true;
            }
            else if (input.value.length < 5 ) {
                invalidField = true;
            }
        }

        else if (input.type === "integer") {
            if (input.value === "" || input.value === null) {
                invalidField = true;
            }
            else {
                let value = input.value;
                const floatValue = parseInt(value);
                if (isNaN(floatValue)) {
                    invalidField = true;
                }
                else {
                    if (floatValue <=0)
                    {
                        invalidField = true;
                    }
                } 
            }
        }

        

        if (invalidField) {
            messages.push({
                message: input.message,
                id: input.name
            })
        }

    })
    return messages;

    
}

export const validatorHelper = { 
    validate
}