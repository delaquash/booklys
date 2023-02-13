

export const createError =(message: string, status?: any, )=> {
    const err = new Error()
    console.log(err);
    err.message = message;
    return err
}