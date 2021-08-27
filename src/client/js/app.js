export const getData = async(url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const Data = await request.json();
        return Data;
    } catch (error) {
        console.log("GetError", error);
        // appropriately handle the error
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



