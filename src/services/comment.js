import { commentApi } from "../api";

const fetchCommentByProduct = async (ma_mh) => {
  const data = await commentApi.getByProduct(ma_mh);
  return data;
};

export { fetchCommentByProduct };
