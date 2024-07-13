class HttpError extends Error {
    constructor(message, errorcode){
        super(message); // Add a 'message' property
        this.code = errorcode
    }
}

module.exports = HttpError;