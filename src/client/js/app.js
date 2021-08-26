
export const getData = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

export const showDaysLeft = (currentDate, departDate) => {
  return Math.ceil(
    Math.abs(new Date(departDate) - new Date(currentDate)) /
      (1000 * 60 * 60 * 24)
  );
};

export const generateForm = ( city, departDate, returnDate) => {
  if (( city, departDate, returnDate !== "")) return true;
};


