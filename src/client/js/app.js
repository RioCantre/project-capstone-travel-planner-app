
export const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
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
 


export const showDaysLeft = (returnDate, departDate) => {
  return Math.ceil(
    Math.abs(new Date(departDate) - new Date(returnDate)) /
      (1000 * 60 * 60 * 24)
  );
};

