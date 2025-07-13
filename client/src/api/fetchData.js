const query = `
    query ExampleQuery {
        details {
            about {
                profileImage
                description
                resume
            }
            experience {
                companyList
                descriptionList
                workDetailsList
                skillList
                durationList
            }
            contact {
                email
                description
            }
        }
    }`;

export const getData = async () => {
  const response = await fetch("http://localhost:5000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.data;
};
