
export const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  try {
    const getData = await res.json();
    return getData;
  } catch (err) {
    console.log("Error:", err);
  }
};
 

export const generateForm = ( city, departDate, returnDate) => {
  if (( city, departDate, returnDate !== "")) return true;
};

