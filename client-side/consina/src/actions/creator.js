import { KYT_PENDING, KYT_SUCCESS, KYT_REJECT, detail_PENDING, detail_SUCCESS, detail_REJECT} from "./type";

export const KytPending = () => ({
  type: KYT_PENDING,
});

export const KytSuccess = (toJson) => ({
  type: KYT_SUCCESS,
  payload: toJson,
});

export const KytReject = (errorMessage) => ({
  type: KYT_REJECT,
  payload: errorMessage,
});
//=======
export const detailPending = () => ({
  type: detail_PENDING,
});

export const detailSuccess = (toJson) => ({
  type: detail_SUCCESS,
  payload: toJson,
});

export const detailReject = (errorMessage) => ({
  type: detail_REJECT,
  payload: errorMessage,
});



export const fetchKyt = () => {
  return async (dispatch, getsate) => {
    try {
      dispatch(KytPending());
      const response = await fetch("http://localhost:3000/readProduct");
      if (!response.ok) {
        throw new Error(response.text());
      }
      const toJson = await response.json();
      dispatch(KytSuccess(toJson));
    } catch (error) {
      dispatch(KytReject(error));
    }
  };
};
// console.log(fetchKyt, `INI Fetch <<<<<<`);

export const fetchDetailDataHelm = (slug) => {
  return async (dispatch, getsate) => {
    try {
      dispatch(detailPending());
      const response = await fetch(
        `http://localhost:3000/detailProduct/${slug}`
      );
      if (!response.ok) {
        throw new Error(response.text());
      }
      const toJson = await response.json();
      // console.log(toJson,"ini creator");
       await dispatch(detailSuccess(toJson));
      dispatch(fetchKyt());
    } catch (error) {
      dispatch(detailReject(error));
    }
  };
};
