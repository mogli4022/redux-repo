export const incNumber = () => {
  return { type: "INCREMENT" };
};

export const decNumber = () => {

  const apiData = {data:"data"}
  return { type: "DECREMENT", payload: {abc:'abc',...apidata} };
};

export const login = (userName, password) => {
  // api username, password
  // { name: , photo,token, }
  return { type: 'loginData', data: 'efebjhf' }
}
