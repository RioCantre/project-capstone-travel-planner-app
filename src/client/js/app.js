
export const postData = async (url = "", data = {}) => {
  const response = await fetch('http://localhost:5000/addEntry', {
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
export const postLocation = async (url = "", data = {}) => {
  const response = await fetch('http://localhost:5000/location', {
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
export const postWeather = async (url = "", data = {}) => {
  const response = await fetch('http://localhost:5000/weather', {
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
export const postPhoto = async (url = "", data = {}) => {
  const response = await fetch('http://localhost:5000/photo', {
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

