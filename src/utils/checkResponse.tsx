function checkResponse(response: any) {
  if (response.ok) {
    console.log(response);
    throw new Error(response.status + ' ' + response.statusText);
  }
  return response;
}

export default checkResponse;
