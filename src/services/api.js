// export const AGENDA_SLUG = "mi_agenda";
// export const AGENDA_NAME = "Mi Agenda Personal";

export const createAgenda = async (slug) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${slug}`,
    {
      method: "POST",
      // body: JSON.stringify(),
      headers: {
        Accept: "application/json",
      },
    }
  );
  if (response.ok) return await response.json();
  return {
    error: { status: response.status, statusText: response.statusText },
  };
};

export const getData = async (slug) => {
  const response = await fetch(
    `https://playground.4geeks.com/contact/agendas/${slug}/contacts`
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
// export const updateData = async () => {
//   const response = await fetch(
//     `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts`,
//     {
//       method: "PUT",
//       body: JSON.stringify(dataToSend),
//       headers: {
//         "Content-Type": "application/json",
//       },
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
