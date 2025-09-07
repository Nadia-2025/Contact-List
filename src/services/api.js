export const AGENDA_SLUG = "agenda_nadia";

export const getData = async () => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`
  );
  if (response.ok) {
    const data = await response.json();
    return data.contacts || [];
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};

export const createData = async (contact) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`,
    {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("error: ", response.status, response.statusText);

    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};
export const updateData = async (id, contact) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("error: ", response.status, response.statusText);
    return {
      error: { status: response.status, statusText: response.statusText },
    };
  }
};

// export const deleteData = async () => {
//   const response = await fetch(
//     `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`,
//     {
//       method: "DELETE",
//     }
//   );
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("error: ", response.status, response.statusText);

//     return {
//       error: { status: response.status, statusText: response.statusText },
//     };
//   }
// };
