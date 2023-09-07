import { handleError } from "./handleError.middlewares";
import { verifyId } from "./verifyId.middlewares";
import { verifyName } from "./verifyName.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { listPagination } from "./pagination.middlewares";

export default {
    handleError,
    verifyId,
    verifyName,
    validateBody,
    listPagination
}