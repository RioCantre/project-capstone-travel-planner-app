
//  post data from server API 
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


// adds alert to the form 
export const generateForm = ( city, departDate, returnDate) => {
  if (( city, departDate, returnDate !== "")) return true;
};


// reformat default date
export const reformatDate = (departDate) => {
  return departDate.toLocaleDateString('en-US');
};



