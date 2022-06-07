export const responseHelper = {
    validateResponse,
    validateResponses,
} 

function validateResponses(responses) {
    let errorMsg = null;
    responses.map((res) => {
        if(res) {
            if(!validateResponse(res)) {
                errorMsg = res;
                return true;
            }
        }
    });

    if(errorMsg !== null) {
        return errorMsg;
    }
    return responses;
}

function validateResponse(response) {
    if(response.error) {
        console.log(response.error)
        return false;
    }
    return response;
}