import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'secret_key')

            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth;